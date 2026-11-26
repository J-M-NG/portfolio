#!/usr/bin/env node
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const projectsDir = join(rootDir, 'src', 'content', 'projects');
const outputPath = join(rootDir, 'src', 'data', 'github-meta.json');

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function formatDate(dateInput) {
  const d = new Date(dateInput);
  if (Number.isNaN(d.getTime())) return 'Unknown';
  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

function extractGithubRepo(markdown) {
  const fmMatch = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch) return null;
  const line = fmMatch[1].match(/^githubRepo:\s*(.+)$/m);
  if (!line) return null;
  const raw = line[1].trim().replace(/^["']|["']$/g, '');
  if (!raw || raw === 'null' || raw === '""' || raw === "''") return null;
  return raw;
}

async function fetchRepoMetadata(repo, headers) {
  const repoRes = await fetch(`https://api.github.com/repos/${repo}`, { headers });
  if (!repoRes.ok) {
    console.warn(`[sync-github] Skipping ${repo} (HTTP ${repoRes.status})`);
    return null;
  }
  const repoData = await repoRes.json();

  let commitsLabel = 'Active repository';
  try {
    const commitsRes = await fetch(
      `https://api.github.com/repos/${repo}/commits?per_page=1`,
      { headers }
    );
    if (commitsRes.ok) {
      const link = commitsRes.headers.get('link') || '';
      const lastMatch = link.match(/[?&]page=(\d+)>;\s*rel="last"/);
      if (lastMatch) {
        const count = Number(lastMatch[1]);
        commitsLabel = `${count} ${count === 1 ? 'commit' : 'commits'}`;
      } else {
        const list = await commitsRes.json();
        const count = Array.isArray(list) ? list.length : 0;
        commitsLabel = `${count} ${count === 1 ? 'commit' : 'commits'}`;
      }
    }
  } catch {
    // Keep fallback commitsLabel if commit count request fails
  }

  const stars = Number(repoData.stargazers_count || 0);
  return {
    primaryLang: repoData.language || 'Markdown',
    lastPush: formatDate(repoData.pushed_at || repoData.updated_at),
    commits: commitsLabel,
    stars: `${stars} ${stars === 1 ? 'star' : 'stars'}`,
    htmlUrl: repoData.html_url || `https://github.com/${repo}`,
  };
}

async function main() {
  let existing = { syncedAt: formatDate(new Date()), repos: {} };
  try {
    const raw = await readFile(outputPath, 'utf8');
    existing = JSON.parse(raw);
  } catch {
    // No existing cache yet
  }

  const files = (await readdir(projectsDir)).filter((f) => f.endsWith('.md'));
  const repos = [];
  for (const file of files) {
    const content = await readFile(join(projectsDir, file), 'utf8');
    const repo = extractGithubRepo(content);
    if (repo) repos.push(repo);
  }

  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'project-reef-sync',
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const nextRepos = { ...(existing.repos || {}) };
  let updatedCount = 0;

  for (const repo of repos) {
    try {
      const meta = await fetchRepoMetadata(repo, headers);
      if (meta) {
        nextRepos[repo] = meta;
        updatedCount += 1;
      }
    } catch (err) {
      console.warn(`[sync-github] Failed to fetch ${repo}: ${err.message}`);
    }
  }

  const payload = {
    syncedAt: formatDate(new Date()),
    repos: nextRepos,
  };

  await writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  console.log(`[sync-github] Synced ${updatedCount}/${repos.length} linked repositories.`);
}

main().catch((err) => {
  console.error('[sync-github] Error:', err);
  process.exit(1);
});
