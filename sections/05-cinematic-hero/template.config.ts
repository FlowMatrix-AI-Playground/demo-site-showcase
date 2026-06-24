import type { TemplateDefinition } from '../types.js';

export const cinematicHero: TemplateDefinition = {
  id: '05-cinematic-hero',
  name: 'Cinematic Hero',
  philosophy:
    'Full-screen hero sections, parallax, atmospheric effects. The visuals ARE the message. Minimal text, maximum impact.',
  keywords: ['cinematic', 'immersive', 'atmospheric', 'parallax', 'visual-first'],

  sectionComposition: [
    {
      type: 'hero',
      variant: 'cinematic',
      background: 'inverted',
      notes:
        'Full-viewport hero with atmospheric effects -- embers, vignette, slow kenBurns zoom. Minimal text overlaid on dark visuals.',
    },
    {
      type: 'media',
      background: 'default',
      variant: 'full-bleed',
      notes:
        'Full-bleed image or video section. No text overlay -- the visual speaks for itself.',
    },
    {
      type: 'features',
      background: 'muted',
      notes:
        'Large icon + short text in a 2-column layout. Features are secondary to visuals, so they stay brief.',
    },
    {
      type: 'testimonials',
      variant: 'single-quote',
      background: 'inverted',
      notes:
        'Single dramatic quote in large type against a dark background. Theatrical and confident.',
    },
    {
      type: 'cta',
      background: 'accent',
      notes:
        'Bold cinematic CTA. Accent section with confident copy and a single action.',
    },
  ],

  interactionModel: {
    navigation: 'scroll-single-page',
    scrollBehavior: 'parallax',
    transitions: 'fade',
    hoverDensity: 'minimal',
    keyInteractions: [
      'Parallax background layers with multi-layer depth (hero, media sections)',
      'Content fades in over moving background as user scrolls',
      'Auto-advancing ambient elements -- embers, particles, or light streaks',
      'Slow kenBurns zoom on hero image (subtle 5-10% scale over 20s)',
      'Section transitions with opacity crossfade between backgrounds',
      'Subtle vignette darkening at section edges for depth framing',
    ],
  },

  suggestedFonts: [
    {
      heading: 'Syncopate',
      body: 'Work Sans',
      googleFonts: ['Syncopate:wght@400;700', 'Work+Sans:wght@400;500;600'],
    },
    {
      heading: 'Montserrat',
      body: 'Hind',
      googleFonts: ['Montserrat:wght@400;600;700', 'Hind:wght@400;500;700'],
    },
    {
      heading: 'Syne',
      body: 'Inter',
      googleFonts: ['Syne:wght@400;600;700', 'Inter:wght@400;500;600'],
    },
  ],

  colorStrategy: {
    balance:
      'Dark and moody base. Deep navies, charcoals, and near-blacks. Warm accent -- gold, amber, or copper -- used sparingly for CTAs and highlights. Atmospheric and cinematic throughout.',
    preferredMode: 'dark',
    tonePattern: ['inverted', 'default', 'muted', 'inverted', 'accent'],
    notes:
      'Dark mode preferred. The palette should feel like a movie poster or luxury hotel lobby. Warm accent provides contrast against the cool dark tones. Avoid bright or saturated colors outside the accent -- everything else stays subdued and atmospheric.',
  },

  bestFor: [
    'Photography studios and portfolios',
    'Film and entertainment',
    'Hospitality and luxury hotels',
    'Real estate and property showcases',
    'Experience-driven brands and events',
  ],
};
