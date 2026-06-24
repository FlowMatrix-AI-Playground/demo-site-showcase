import type { TemplateDefinition } from '../types.js';

export const editorialMagazine: TemplateDefinition = {
  id: '03-editorial-magazine',
  name: 'Editorial Magazine',
  philosophy:
    'Content-rich, magazine-style layout. Large hero images, pull quotes, multi-column text. Reading IS the experience.',
  keywords: ['editorial', 'magazine', 'content-rich', 'typography-driven', 'columns'],

  sectionComposition: [
    {
      type: 'hero',
      variant: 'cinematic',
      background: 'default',
      notes: 'Magazine cover feel. Full-width image with overlaid headline and byline.',
    },
    {
      type: 'rich-text',
      background: 'default',
      notes:
        'Large serif body text. Pull quote in accent color. 2-column layout on desktop, single column on mobile.',
    },
    {
      type: 'features',
      background: 'muted',
      notes:
        'Editorial cards with large images, category labels, and short excerpts. Magazine article grid.',
    },
    {
      type: 'media',
      background: 'default',
      variant: 'full-width',
      notes: 'Full-width image break with caption underneath. Breathing room between content blocks.',
    },
    {
      type: 'testimonials',
      background: 'muted',
      variant: 'masonry',
      notes:
        'Masonry or staggered layout with photos. Multiple voices, not just one.',
    },
    {
      type: 'stats',
      background: 'accent',
      notes:
        'Elegant typography with thin horizontal rules between items. Numbers support the narrative.',
    },
    {
      type: 'faq',
      background: 'default',
      notes:
        'Accordion style with thin borders. Generous line height for readability.',
    },
    {
      type: 'cta',
      background: 'muted',
      notes:
        'Newsletter-style signup. Feels like subscribing to a magazine, not buying a product.',
    },
  ],

  interactionModel: {
    navigation: 'scroll-single-page',
    scrollBehavior: 'smooth',
    transitions: 'fade',
    hoverDensity: 'moderate',
    keyInteractions: [
      'Scroll progress bar (thin, accent color) at top of viewport',
      'Parallax on hero image (0.3 speed ratio)',
      'Pull quotes slide in from the side on scroll',
      'Image captions fade in after image enters viewport',
      'Reading time estimate displayed near headline',
      'Smooth accordion expand/collapse on FAQ section',
    ],
  },

  suggestedFonts: [
    {
      heading: 'Lora',
      body: 'Merriweather Sans',
      googleFonts: ['Lora:wght@400;600;700', 'Merriweather+Sans:wght@400;600'],
    },
    {
      heading: 'Cormorant Garamond',
      body: 'Nunito Sans',
      googleFonts: ['Cormorant+Garamond:wght@400;600;700', 'Nunito+Sans:wght@400;600'],
    },
    {
      heading: 'Libre Baskerville',
      body: 'Karla',
      googleFonts: ['Libre+Baskerville:wght@400;700', 'Karla:wght@400;500;700'],
    },
  ],

  colorStrategy: {
    balance:
      'Warm neutrals. Cream or off-white backgrounds, charcoal text, one editorial accent (burgundy, forest green, or navy). Typography IS the visual design. Colors support readability. Use thin rules for structure instead of bold color blocks.',
    preferredMode: 'light',
    tonePattern: ['default', 'default', 'muted', 'default', 'muted', 'accent', 'default', 'muted'],
    notes:
      'Light mode only. The palette should feel like a well-printed magazine -- warm paper tones, rich ink, and one accent used sparingly for pull quotes and progress indicators.',
  },

  bestFor: [
    'Content-heavy businesses',
    'Agencies with case studies',
    'Thought leadership platforms',
    'Professional services firms',
    'Brands with strong written content',
  ],
};
