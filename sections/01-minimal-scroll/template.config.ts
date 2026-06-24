import type { TemplateDefinition } from '../types.js';

export const minimalScroll: TemplateDefinition = {
  id: '01-minimal-scroll',
  name: 'Minimal Scroll',
  philosophy:
    'Apple-style simplicity -- one page, generous whitespace, smooth scroll anchors, where every element earns its place.',
  keywords: ['minimal', 'clean', 'whitespace', 'elegant', 'focused'],

  sectionComposition: [
    {
      type: 'hero',
      variant: 'centered',
      background: 'default',
      notes: 'Single centered headline with generous vertical padding.',
    },
    {
      type: 'logo-bar',
      background: 'muted',
      notes: 'Muted row of client or partner logos. Understated, no hover effects.',
    },
    {
      type: 'features',
      background: 'default',
      notes: '3 features maximum. Clean icons or illustrations. No visual clutter.',
    },
    {
      type: 'media',
      background: 'muted',
      variant: 'full-width',
      notes: 'Full-width image or video. Let the visual breathe with no competing elements.',
    },
    {
      type: 'testimonials',
      background: 'default',
      variant: 'single-quote',
      notes: 'One testimonial at a time. Large serif quote, small attribution.',
    },
    {
      type: 'cta',
      background: 'accent',
      notes: 'The only accent section. Clear action with restrained styling.',
    },
  ],

  interactionModel: {
    navigation: 'scroll-single-page',
    scrollBehavior: 'smooth',
    transitions: 'fade',
    hoverDensity: 'minimal',
    keyInteractions: [
      'Smooth scroll between anchored sections',
      'Fade-in-up reveal on scroll via IntersectionObserver',
      'Subtle hover scale on CTAs (1.02x)',
      'Section snap on desktop via CSS scroll-snap',
      'Sticky minimal nav with scroll progress indicator',
    ],
  },

  suggestedFonts: [
    {
      heading: 'DM Serif Display',
      body: 'DM Sans',
      googleFonts: ['DM+Serif+Display:wght@400', 'DM+Sans:wght@400;500;700'],
    },
    {
      heading: 'Playfair Display',
      body: 'Source Sans 3',
      googleFonts: ['Playfair+Display:wght@400;700', 'Source+Sans+3:wght@400;600'],
    },
    {
      heading: 'Fraunces',
      body: 'Commissioner',
      googleFonts: ['Fraunces:wght@400;700', 'Commissioner:wght@400;500;700'],
    },
  ],

  colorStrategy: {
    balance:
      'Monochromatic with one accent. Primary is neutral (near-black or deep tone). Accent is a single warm or cool pop used only for CTAs and highlights. Maximum restraint. No gradients.',
    preferredMode: 'light',
    tonePattern: ['default', 'muted', 'default', 'muted', 'default', 'accent'],
    notes:
      'Light mode preferred. The palette should feel expensive through absence, not addition. One accent color only -- never two.',
  },

  bestFor: [
    'Premium services',
    'Consulting firms',
    'SaaS products',
    'Personal brands',
    'Luxury and high-end businesses',
  ],
};
