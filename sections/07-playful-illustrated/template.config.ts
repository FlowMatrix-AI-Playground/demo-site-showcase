import type { TemplateDefinition } from '../types.js';

export const playfulIllustrated: TemplateDefinition = {
  id: '07-playful-illustrated',
  name: 'Playful Illustrated',
  philosophy:
    'Soft palettes, rounded shapes, bouncy animations, illustrated accents. Personality-driven design that makes people smile.',
  keywords: ['playful', 'illustrated', 'soft', 'bouncy', 'friendly'],

  sectionComposition: [
    {
      type: 'hero',
      variant: 'centered',
      background: 'default',
      notes:
        'Large friendly illustration or image with rounded elements. Playful headline with warm, approachable copy.',
    },
    {
      type: 'features',
      background: 'muted',
      notes:
        'Icon cards with generous border-radius (16px+). Playful icons that wobble on hover. Soft muted background.',
    },
    {
      type: 'steps',
      background: 'default',
      notes:
        'Numbered steps connected by a dotted SVG line that draws on scroll. Each step bounces in with spring easing.',
    },
    {
      type: 'testimonials',
      background: 'muted',
      notes:
        'Speech-bubble style cards that wiggle in on scroll. Rounded corners, soft shadows, avatar photos.',
    },
    {
      type: 'faq',
      background: 'default',
      notes:
        'Expandable FAQ items with rubber-band bounce animation on open/close. Friendly, conversational answers.',
    },
    {
      type: 'cta',
      background: 'accent',
      notes:
        'Rounded pill button with bounce-on-press. Friendly, encouraging copy. Accent background with soft edges.',
    },
  ],

  interactionModel: {
    navigation: 'scroll-single-page',
    scrollBehavior: 'smooth',
    transitions: 'fade',
    hoverDensity: 'rich',
    keyInteractions: [
      'Bouncy entrance animations with spring easing (overshoot, settle)',
      'Icons wobble on hover via CSS rotate oscillation (2-3 degree swing)',
      'Buttons bounce on press -- scale to 0.95 then spring to 1.05 before settling',
      'Step connectors draw on scroll via SVG line animation (stroke-dashoffset)',
      'Speech-bubble testimonials wiggle in with slight rotation and settle',
      'FAQ items expand with rubber-band bounce (overshoot height, snap back)',
    ],
  },

  suggestedFonts: [
    {
      heading: 'Baloo 2',
      body: 'Quicksand',
      googleFonts: ['Baloo+2:wght@400;600;700', 'Quicksand:wght@400;500;700'],
    },
    {
      heading: 'Fredoka',
      body: 'Nunito',
      googleFonts: ['Fredoka:wght@400;600;700', 'Nunito:wght@400;500;700'],
    },
    {
      heading: 'Bubblegum Sans',
      body: 'Comfortaa',
      googleFonts: ['Bubblegum+Sans', 'Comfortaa:wght@400;500;700'],
    },
  ],

  colorStrategy: {
    balance:
      'Soft pastels as the base -- lavender, mint, peach, sky blue. Playful saturated pops for accents and CTAs. No sharp edges anywhere: border-radius 16px+ on cards, pill-shaped buttons, rounded containers throughout.',
    preferredMode: 'light',
    tonePattern: ['default', 'muted', 'default', 'muted', 'default', 'accent'],
    notes:
      'Light mode only. The palette should feel like a friendly illustration, not a corporate site. Colors can be more adventurous than other templates -- multiple pastel tones are fine as long as the accent stands out. Avoid dark backgrounds entirely; they kill the playful tone.',
  },

  bestFor: [
    "Children's brands and family products",
    'Education and e-learning platforms',
    'Wellness and self-care brands',
    'Pet brands and animal services',
    'Friendly SaaS and community platforms',
  ],
};
