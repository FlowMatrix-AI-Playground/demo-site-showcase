import type { TemplateDefinition } from '../types.js';

export const storytellingScroll: TemplateDefinition = {
  id: '10-storytelling-scroll',
  name: 'Storytelling Scroll',
  philosophy:
    'Scroll-triggered reveals, progressive narrative, sequential discovery. Each section builds on the previous. The page IS a story.',
  keywords: ['storytelling', 'scroll-triggered', 'narrative', 'progressive', 'chapters'],

  sectionComposition: [
    {
      type: 'hero',
      variant: 'fullscreen',
      background: 'inverted',
      notes:
        'Chapter 1 title card. Full-viewport dark opening with parallax depth. A single bold headline sets the narrative hook. Cool color temperature (deep blues, silvers).',
    },
    {
      type: 'rich-text',
      background: 'default',
      notes:
        'Opening narrative. Long-form prose that introduces the brand story. Text reveals line by line as the user scrolls. Generous typography, reading-optimized measure.',
    },
    {
      type: 'media',
      background: 'muted',
      notes:
        'Full-width visual break. A large image or video that fills the viewport as a story divider. Parallax drift as the user scrolls past.',
    },
    {
      type: 'features',
      background: 'default',
      notes:
        'Features revealed one at a time on scroll. Each feature card is locked in place while its content animates in, then releases to the next. Sequential, not simultaneous.',
    },
    {
      type: 'stats',
      background: 'accent',
      notes:
        'Numbers count up when scrolled into view. Accent background marks the story midpoint -- the emotional peak. Color temperature begins warming here (amber tones).',
    },
    {
      type: 'steps',
      background: 'default',
      notes:
        'Timeline with a connecting line that draws on scroll via SVG stroke-dashoffset. Each step appears as the line reaches it. The visual metaphor of progress.',
    },
    {
      type: 'testimonials',
      background: 'muted',
      notes:
        'Testimonials fade in as story chapters. Each quote appears one at a time, fully occupying the viewport before the next arrives. Warmer color temperature (terracotta tones).',
    },
    {
      type: 'cta',
      background: 'inverted',
      notes:
        'Closing chapter. Fade-to-black transition into a dark CTA section. The warmest accent color (gold) for the final button. The story resolves here.',
    },
  ],

  interactionModel: {
    navigation: 'scroll-single-page',
    scrollBehavior: 'scroll-triggered',
    transitions: 'morph',
    hoverDensity: 'minimal',
    keyInteractions: [
      'Scroll-locked animations -- content appears and moves based on scroll position, not time',
      'Chapter markers in a floating sidebar (dots showing reading progress)',
      'Connecting timeline line draws as the user scrolls past the steps section (SVG stroke-dashoffset)',
      'Features reveal one by one -- each locks the scroll while its content animates in, then releases',
      'Stats count up from zero when the section enters the viewport',
      'Parallax depth on the hero and media sections (foreground vs background drift)',
      'Color temperature shifts from cool (blues, silvers) to warm (amber, terracotta, gold) as the user scrolls down',
      'Fade-to-black transitions between major chapter sections',
    ],
  },

  suggestedFonts: [
    {
      heading: 'Crimson Pro',
      body: 'Atkinson Hyperlegible',
      googleFonts: ['Crimson+Pro:wght@400;600;700', 'Atkinson+Hyperlegible:wght@400;700'],
    },
    {
      heading: 'Spectral',
      body: 'Rubik',
      googleFonts: ['Spectral:wght@400;600;700', 'Rubik:wght@400;500;600'],
    },
    {
      heading: 'Newsreader',
      body: 'Outfit',
      googleFonts: ['Newsreader:wght@400;600;700', 'Outfit:wght@400;500;600'],
    },
  ],

  colorStrategy: {
    balance:
      'Evolving palette that mirrors the story arc. Opens cool -- deep blues, silvers, slate tones. Warms gradually through the middle sections -- amber, terracotta. Closes warm -- gold accents on dark. The color shift is subtle enough to feel subconscious but deliberate enough to track emotionally.',
    preferredMode: 'either',
    tonePattern: ['inverted', 'default', 'muted', 'default', 'accent', 'default', 'muted', 'inverted'],
    notes:
      'Either mode works. The template opens dark (inverted hero), moves through light sections in the middle, and closes dark again (inverted CTA) -- a visual bookend. The key differentiator is the evolving color temperature: cool-to-warm across the scroll journey. Accent is used once at the stats midpoint for emotional emphasis.',
  },

  bestFor: [
    'Brand stories and origin narratives',
    'Product launches and reveal campaigns',
    'Annual reports and impact summaries',
    'Cause-driven and mission-focused organizations',
    "Founders' stories and narrative-driven marketing",
  ],
};
