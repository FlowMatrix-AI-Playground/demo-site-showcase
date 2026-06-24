import type { TemplateDefinition } from '../types.js';

export const multiPageCorporate: TemplateDefinition = {
  id: '09-multi-page-corporate',
  name: 'Multi-Page Corporate',
  philosophy:
    'Traditional multi-page structure. Clear hierarchy, professional tone, breadcrumbs. Familiar navigation patterns that build trust.',
  keywords: ['corporate', 'multi-page', 'professional', 'structured', 'trustworthy'],

  sectionComposition: [
    // --- Home page ---
    {
      type: 'hero',
      variant: 'split-right',
      background: 'default',
      notes: 'Home page. Split-right hero with headline left, image/graphic right. Professional and clear.',
    },
    {
      type: 'features',
      background: 'muted',
      notes: 'Home page. 3-4 service highlight cards on a muted background. Brief descriptions, linking to Services page.',
    },
    {
      type: 'stats',
      background: 'default',
      notes: 'Home page. Clean stat numbers (years in business, clients served, etc.). No glow, no animation -- just credibility.',
    },
    {
      type: 'testimonials',
      background: 'muted',
      notes: 'Home page. 2-3 client testimonial cards. Professional headshots, company names, titles.',
    },
    {
      type: 'cta',
      background: 'accent',
      notes: 'Home page. Clear call to action driving to contact or services. Accent background.',
    },

    // --- Services page ---
    {
      type: 'hero',
      variant: 'centered',
      background: 'muted',
      notes: 'Services page. Centered hero with page title and breadcrumb. Muted background differentiates from Home hero.',
    },
    {
      type: 'features',
      background: 'default',
      notes: 'Services page. Detailed service cards with icons, descriptions, and individual CTAs. More depth than Home features.',
    },
    {
      type: 'steps',
      background: 'muted',
      notes: 'Services page. Process flow showing how engagement works (discovery, proposal, delivery, support).',
    },
    {
      type: 'pricing',
      background: 'default',
      notes: 'Services page. Comparison table or tiered pricing cards. Clean, no gradients. Feature checkmarks per tier.',
    },

    // --- About page ---
    {
      type: 'about',
      background: 'default',
      notes: 'About page. Company story section with timeline or narrative. Professional tone.',
    },
    {
      type: 'team',
      background: 'muted',
      notes: 'About page. Headshot grid with name, title, and optional short bio. Muted background.',
    },
    {
      type: 'testimonials',
      background: 'default',
      notes: 'About page. Detailed client quotes with longer text than Home testimonials. Builds deeper trust.',
    },
    {
      type: 'contact',
      background: 'muted',
      notes: 'About page. Contact form alongside office address, phone, and email. Muted background signals page end.',
    },
  ],

  interactionModel: {
    navigation: 'multi-page',
    scrollBehavior: 'standard',
    transitions: 'fade',
    hoverDensity: 'moderate',
    keyInteractions: [
      'Standard page-to-page navigation with active page indicator in the nav bar',
      'Breadcrumbs on Services and About pages for orientation',
      'Anchor links within long pages for quick jumps',
      'Card hover shadow deepens (subtle lift, not dramatic)',
      'Nav underline slides to active item on page change',
      'Smooth page transitions via fade between routes',
      'Contact form validation states (inline error/success messaging)',
    ],
  },

  suggestedFonts: [
    {
      heading: 'Bitter',
      body: 'Hind',
      googleFonts: ['Bitter:wght@400;600;700', 'Hind:wght@400;500;600'],
    },
    {
      heading: 'Merriweather',
      body: 'Source Sans 3',
      googleFonts: ['Merriweather:wght@400;700', 'Source+Sans+3:wght@400;600'],
    },
    {
      heading: 'Libre Franklin',
      body: 'Noto Serif',
      googleFonts: ['Libre+Franklin:wght@400;600;700', 'Noto+Serif:wght@400;500;700'],
    },
  ],

  colorStrategy: {
    balance:
      'Corporate blues or greens as the primary color. Clean whites and light grays for backgrounds. Navy or forest green for headers and key UI elements. Muted gray backgrounds for alternating sections. Accent used sparingly -- only CTAs and active navigation states.',
    preferredMode: 'light',
    tonePattern: [
      'default', 'muted', 'default', 'muted', 'accent',
      'muted', 'default', 'muted', 'default',
      'default', 'muted', 'default', 'muted',
    ],
    notes:
      'Light mode only. The palette must feel trustworthy and established -- no trendy gradients, no glow effects. Tone pattern spans all three pages in order: Home (5 sections), Services (4 sections), About (4 sections). Each page alternates default/muted for visual rhythm, with accent reserved for CTA sections.',
  },

  bestFor: [
    'Professional services (law firms, accounting, consulting)',
    'Insurance and financial advisory',
    'B2B enterprises with complex service offerings',
    'Established businesses migrating from legacy sites',
    'Any brand where familiarity and trust outweigh novelty',
  ],
};
