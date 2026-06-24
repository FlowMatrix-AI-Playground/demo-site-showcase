import type { TemplateDefinition } from '../types.js';

export const darkPremium: TemplateDefinition = {
  id: '08-dark-premium',
  name: 'Dark Premium',
  philosophy:
    'Dark-first with subtle gradients, glow effects, and glass morphism. Stripe/Linear vibe. Premium software aesthetic.',
  keywords: ['dark', 'premium', 'glass', 'glow', 'gradients'],

  sectionComposition: [
    {
      type: 'hero',
      variant: 'fullscreen',
      background: 'inverted',
      notes:
        'Full-viewport dark hero with ambient gradient background that shifts subtly. Bold headline with glow text effect. Floating glass-morphism UI element as visual proof.',
    },
    {
      type: 'logo-bar',
      background: 'inverted',
      notes:
        'Subtle logo row on dark background. Logos rendered in white/gray monochrome. Low opacity, no hover effects -- confidence through understatement.',
    },
    {
      type: 'features',
      background: 'inverted',
      notes:
        'Glass-morphism feature cards (white/5% to white/10% background, backdrop-blur-xl). Each card has a faint glowing border on hover. Icons with subtle gradient fills.',
    },
    {
      type: 'stats',
      background: 'inverted',
      notes:
        'Glowing number counters that animate on scroll. Each stat has a soft radial glow behind the number. Minimal labels beneath.',
    },
    {
      type: 'testimonials',
      background: 'inverted',
      notes:
        'Glass-morphism quote cards with subtle border glow. Quote text in light gray, attribution slightly dimmer. Cards lift with enhanced backdrop-blur on hover.',
    },
    {
      type: 'pricing',
      background: 'inverted',
      notes:
        'Dark pricing cards. Featured tier has an animated gradient border (purple-to-blue or teal-to-cyan cycling slowly). Non-featured tiers use subtle glass card styling.',
    },
    {
      type: 'cta',
      background: 'accent',
      notes:
        'Gradient background section (purple-to-blue, teal-to-cyan, or violet-to-pink depending on chosen accent). Bold call to action with a glowing button.',
    },
  ],

  interactionModel: {
    navigation: 'scroll-single-page',
    scrollBehavior: 'parallax',
    transitions: 'view-transitions',
    hoverDensity: 'rich',
    keyInteractions: [
      'Ambient gradient background shifts subtly on scroll position',
      'Glass cards lift with shadow bloom and enhanced backdrop-blur on hover',
      'Glowing accent borders pulse gently on featured elements',
      'Number counters animate up with a glow effect when scrolled into view',
      'Gradient border animation cycles on the featured pricing tier',
      'Smooth view transitions between any route changes (Astro View Transitions API)',
      'Depth parallax layers -- foreground elements scroll faster than background gradients',
    ],
  },

  suggestedFonts: [
    {
      heading: 'Plus Jakarta Sans',
      body: 'Sora',
      googleFonts: ['Plus+Jakarta+Sans:wght@400;600;700', 'Sora:wght@400;500;600'],
    },
    {
      heading: 'Manrope',
      body: 'Inter',
      googleFonts: ['Manrope:wght@400;600;700', 'Inter:wght@400;500;600'],
    },
    {
      heading: 'Satoshi',
      body: 'General Sans',
      googleFonts: ['Satoshi:wght@400;500;700', 'General+Sans:wght@400;500;600'],
    },
  ],

  colorStrategy: {
    balance:
      'Near-black surfaces (#09090b to #18181b). Gradient accents (purple-to-blue, teal-to-cyan, or violet-to-pink). Glass-morphism cards use white at 5-10% opacity with backdrop-blur. Glow effects use the accent gradient color at low opacity for radial highlights.',
    preferredMode: 'dark',
    tonePattern: ['inverted', 'inverted', 'inverted', 'inverted', 'inverted', 'inverted', 'accent'],
    notes:
      'Dark mode native -- this template never uses light mode. The entire surface is near-black, with depth created through layered glass cards and gradient glows rather than background color changes. Accent gradients provide the only color. Avoid pure white text; use gray-100 to gray-200 for body copy to reduce eye strain.',
  },

  bestFor: [
    'Developer tools and APIs',
    'SaaS platforms',
    'Fintech and crypto products',
    'Premium software with technical audiences',
    'AI/ML products and data platforms',
  ],
};
