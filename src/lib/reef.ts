export type CoralStage = 'polyp' | 'bud' | 'branch' | 'reef';
export type CoralSpecies = 'staghorn' | 'fan' | 'anemone' | 'kelp' | 'brain';
export type SpriteVariant = 'default' | 'alt';

export interface StageMeta {
  id: CoralStage;
  label: string;
  desc: string;
  tagClass: string;
  displayHeight: number;
}

export const STAGES: StageMeta[] = [
  { id: 'polyp', label: 'Polyp', desc: 'Idea & framing', tagClass: '', displayHeight: 48 },
  { id: 'bud', label: 'Bud', desc: 'Early prototype', tagClass: 'jm-tag--warning', displayHeight: 58 },
  { id: 'branch', label: 'Branch', desc: 'Working MVP', tagClass: 'jm-tag--info', displayHeight: 82 },
  { id: 'reef', label: 'Blooming reef', desc: 'Shipped & live', tagClass: 'jm-tag--success', displayHeight: 104 },
];

export const STAGE_MAP: Record<CoralStage, StageMeta> = {
  polyp: STAGES[0],
  bud: STAGES[1],
  branch: STAGES[2],
  reef: STAGES[3],
};

export function getCoralSpritePath(
  stage: CoralStage,
  species: CoralSpecies,
  variant: SpriteVariant = 'default',
  baseUrl = '/'
): string {
  const prefix = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  if (stage === 'polyp') {
    return `${prefix}sprites/${variant === 'alt' ? 'stage-polyp-2.png' : 'stage-polyp.png'}`;
  }
  if (stage === 'bud') {
    return `${prefix}sprites/${variant === 'alt' ? 'stage-bud-2.png' : 'stage-bud.png'}`;
  }
  if (stage === 'reef' && species === 'staghorn' && variant === 'alt') {
    return `${prefix}sprites/staghorn-reef-2.png`;
  }
  return `${prefix}sprites/${species}-${stage}.png`;
}

export function getStageMeta(stage: CoralStage): StageMeta {
  return STAGE_MAP[stage];
}
