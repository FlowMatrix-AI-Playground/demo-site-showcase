import type { TemplateDefinition } from '../types.js';

export const bentoCardGrid: TemplateDefinition = {
  id: '04-bento-card-grid',
  name: 'Bento Card Grid',
  philosophy:
    'Modern SaaS feel. Bento-style cards with hover states and micro-interactions. Information density done right.',
  keywords: ['bento', 'cards', 'grid', 'modern', 'SaaS'],

  sectionComposition: [
    {
      type: 'hero',
      variant: 'centered',
      background: 'default',
      notes:
        'Clean centered headline. Brief subtext and one primary CTA. Sets the modern, grid-aware tone.',
    },
    {
      type: 'features',
      background: 'default',
      notes:
        'Bento grid layout with varying card sizes (1x1, 2x1, 1x2). Cards expand on hover to reveal details.',
    },
    {
      type: 'stats',
      background: 'muted',
      notes:
        'Counter animations triggered on scroll. Muted background keeps stats readable without competing with the bento grid above.',
    },
    {
      type: 'portfolio',
      background: 'default',
      notes:
        'Card grid with filter/sort controls. Filter transitions animate cards in and out smoothly.',
    },
    {
      type: 'testimonials',
      background: 'muted',
      notes:
        'Card-based testimonials with avatars. Consistent card sizing for visual rhythm.',
    },
    {
      type: 'pricing',
      background: 'default',
      notes:
        'Tiered pricing cards. Monthly/annual toggle with smooth value transition. Recommended tier visually elevated.',
    },
    {
      type: 'cta',
      background: 'accent',
      notes:
        'Single accent section. Clean CTA card that stands out from the neutral grid above.',
    },
  ],

  interactionModel: {
    navigation: 'scroll-single-page',
    scrollBehavior: 'smooth',
    transitions: 'fade',
    hoverDensity: 'rich',
    keyInteractions: [
      'Staggered card entrance on scroll -- cards animate in with increasing delay',
      'Expandable cards with smooth height animation on click/hover',
      'Hover reveals hidden content (description, secondary CTA) via slide-up overlay',
      'Card hover lifts with enhanced box-shadow (translateY -4px)',
      'Filter/sort animations on portfolio grid with layout shift transitions',
      'Pricing toggle (monthly/annual) with smooth number and layout transition',
    ],
  },

  suggestedFonts: [
    {
      heading: 'Outfit',
      body: 'Inter',
      googleFonts: ['Outfit:wght@400;500;700', 'Inter:wght@400;500;600;700'],
    },
    {
      heading: 'Plus Jakarta Sans',
      body: 'DM Sans',
      googleFonts: [
        'Plus+Jakarta+Sans:wght@400;600;700',
        'DM+Sans:wght@400;500;700',
      ],
    },
    {
      heading: 'Geist',
      body: 'Geist',
      googleFonts: ['Geist:wght@400;500;700'],
    },
  ],

  colorStrategy: {
    balance:
      'Cool grays (#f4f4f5 to #18181b range) with one vibrant accent -- electric blue, violet, or emerald. Subtle gradients on card backgrounds only. Cards use white/near-white surfaces with light gray borders.',
    preferredMode: 'light',
    tonePattern: ['default', 'default', 'muted', 'default', 'muted', 'default', 'accent'],
    notes:
      'Light mode. The palette should feel modern and professional without being boring. The accent color appears sparingly -- hover states, active filters, CTAs, and the pricing toggle. Card surfaces stay neutral so the content does the work.',
  },

  bestFor: [
    'SaaS products',
    'Tech startups',
    'Developer tools',
    'Dashboards and analytics platforms',
    'Data-driven brands',
  ],
};
