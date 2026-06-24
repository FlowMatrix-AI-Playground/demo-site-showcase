import type { TemplateDefinition } from '../types.js';

export const boldBrutalist: TemplateDefinition = {
  id: '02-bold-brutalist',
  name: 'Bold Brutalist',
  philosophy:
    'Raw, high-contrast, unapologetically loud. Oversized type, asymmetric grids, exposed structure.',
  keywords: ['brutalist', 'raw', 'bold', 'high-contrast', 'asymmetric'],

  sectionComposition: [
    {
      type: 'hero',
      variant: 'split-left',
      background: 'inverted',
      notes:
        'Oversized headline clamped 4-8rem. Stark image with hard crop. No border-radius anywhere.',
    },
    {
      type: 'features',
      background: 'default',
      notes:
        'Asymmetric 2-column layout. Thick borders separating items. No border-radius. Raw grid.',
    },
    {
      type: 'stats',
      background: 'accent',
      notes:
        'Giant numbers with counter animation on scroll. Aggressive accent background.',
    },
    {
      type: 'testimonials',
      background: 'default',
      variant: 'single',
      notes:
        'Single testimonial. Oversized quotation marks. Monospace credit line.',
    },
    {
      type: 'media',
      background: 'inverted',
      variant: 'full-bleed',
      notes:
        'Full-bleed image with overlaid text. No padding. Text sits directly on the image.',
    },
    {
      type: 'steps',
      background: 'default',
      notes:
        'Left-aligned vertical layout. Thick underlines instead of numbered circles. Raw structure.',
    },
    {
      type: 'cta',
      background: 'inverted',
      notes:
        'Giant text. Entire section is clickable. No subtle button -- the whole block is the action.',
    },
  ],

  interactionModel: {
    navigation: 'scroll-single-page',
    scrollBehavior: 'standard',
    transitions: 'jarring-cut',
    hoverDensity: 'rich',
    keyInteractions: [
      'No smooth scroll -- jarring section cuts on purpose',
      'Custom crosshair cursor on interactive elements',
      'Elements shift/glitch on hover (translateX jitter, color invert)',
      'Text scramble animation on headline load',
      'Thick underline slides under nav links on hover',
      'Cards tilt on hover via perspective transform',
    ],
  },

  suggestedFonts: [
    {
      heading: 'Bebas Neue',
      body: 'IBM Plex Mono',
      googleFonts: ['Bebas+Neue', 'IBM+Plex+Mono:wght@400;500;700'],
    },
    {
      heading: 'Anton',
      body: 'Space Mono',
      googleFonts: ['Anton', 'Space+Mono:wght@400;700'],
    },
    {
      heading: 'Oswald',
      body: 'JetBrains Mono',
      googleFonts: ['Oswald:wght@400;700', 'JetBrains+Mono:wght@400;700'],
    },
  ],

  colorStrategy: {
    balance:
      'Maximum contrast. Black/white base with one aggressive accent (neon yellow, electric red, or hot pink). Accent used for highlights, borders, and hover states. Hard color boundaries only -- no subtle gradients.',
    preferredMode: 'either',
    tonePattern: ['inverted', 'default', 'accent', 'default', 'inverted', 'default', 'inverted'],
    notes:
      'Either light or dark mode works, but the contrast must be extreme. The accent color should feel almost dangerous. No soft edges, no gentle transitions between color zones.',
  },

  bestFor: [
    'Creative agencies',
    'Fashion brands',
    'Music artists and labels',
    'Art galleries and exhibitions',
    'Brands wanting to stand out aggressively',
  ],
};
