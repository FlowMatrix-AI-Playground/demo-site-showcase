// sections/index.ts
// Aggregates all template definitions for runtime discovery.
// Uncomment imports as templates are added.

import type { TemplateDefinition } from './types.js';

// Templates 01-03
import { minimalScroll } from './01-minimal-scroll/template.config.js';
import { boldBrutalist } from './02-bold-brutalist/template.config.js';
import { editorialMagazine } from './03-editorial-magazine/template.config.js';

// Templates 04-07
import { bentoCardGrid } from './04-bento-card-grid/template.config.js';
import { cinematicHero } from './05-cinematic-hero/template.config.js';
import { splitPanelExplorer } from './06-split-panel-explorer/template.config.js';
import { playfulIllustrated } from './07-playful-illustrated/template.config.js';

// Templates 08-10
import { darkPremium } from './08-dark-premium/template.config.js';
import { multiPageCorporate } from './09-multi-page-corporate/template.config.js';
import { storytellingScroll } from './10-storytelling-scroll/template.config.js';

export const templates: TemplateDefinition[] = [
  minimalScroll,
  boldBrutalist,
  editorialMagazine,
  bentoCardGrid,
  cinematicHero,
  splitPanelExplorer,
  playfulIllustrated,
  darkPremium,
  multiPageCorporate,
  storytellingScroll,
];

export type {
  TemplateDefinition,
  InteractionModel,
  FontPairing,
  ColorStrategy,
  SectionEntry,
} from './types.js';
