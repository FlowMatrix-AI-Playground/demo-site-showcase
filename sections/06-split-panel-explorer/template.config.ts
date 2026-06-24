import type { TemplateDefinition } from '../types.js';

export const splitPanelExplorer: TemplateDefinition = {
  id: '06-split-panel-explorer',
  name: 'Split Panel Explorer',
  philosophy:
    'Two-panel layout with persistent sidebar navigation. Content discovery through structured exploration. Desktop-first thinking.',
  keywords: ['split-panel', 'sidebar', 'explorer', 'structured', 'navigation'],

  sectionComposition: [
    {
      type: 'hero',
      variant: 'split-left',
      background: 'default',
      notes:
        'Split-left hero. Sidebar visible from the start. Hero content fills the right panel with a bold headline and subtext.',
    },
    {
      type: 'features',
      background: 'default',
      notes:
        'List-style features with expand/collapse accordion. Each feature reveals details on click without leaving the section.',
    },
    {
      type: 'about',
      background: 'muted',
      notes:
        'Company story section. Muted background differentiates it from the feature list above.',
    },
    {
      type: 'portfolio',
      background: 'default',
      notes:
        'Gallery view in the content panel. Clicking an item could expand inline or open a detail view within the panel.',
    },
    {
      type: 'contact',
      background: 'muted',
      notes:
        'Contact form paired with company details. Muted background signals the end of the content journey.',
    },
  ],

  interactionModel: {
    navigation: 'sidebar-panel',
    scrollBehavior: 'standard',
    transitions: 'slide',
    hoverDensity: 'moderate',
    keyInteractions: [
      'Persistent sidebar with active section highlighting as user scrolls',
      'Clicking sidebar link scrolls right panel to the corresponding section',
      'Sidebar collapses to hamburger menu on mobile breakpoints',
      'Content panels animate in from the right on section change',
      'Hover accent bar appears on sidebar items (left border indicator)',
      'Smooth content transitions between sections in the right panel',
    ],
  },

  suggestedFonts: [
    {
      heading: 'Poppins',
      body: 'Noto Sans',
      googleFonts: ['Poppins:wght@400;600;700', 'Noto+Sans:wght@400;500;700'],
    },
    {
      heading: 'Raleway',
      body: 'Open Sans',
      googleFonts: ['Raleway:wght@400;600;700', 'Open+Sans:wght@400;500;600'],
    },
    {
      heading: 'Josefin Sans',
      body: 'Lato',
      googleFonts: ['Josefin+Sans:wght@400;600;700', 'Lato:wght@400;700'],
    },
  ],

  colorStrategy: {
    balance:
      'Sidebar is inverted (dark background, light text). Content area is light. Clear visual separation between navigation and content. Accent color used for active sidebar indicators and interactive highlights.',
    preferredMode: 'light',
    tonePattern: ['default', 'default', 'muted', 'default', 'muted'],
    notes:
      'Light mode for the content area. The sidebar is always inverted (dark) regardless of content theme -- this creates the structural split that defines the template. The tonePattern applies to the content area only. Accent color should be visible against both the dark sidebar and the light content background.',
  },

  bestFor: [
    'Agencies with portfolios and case studies',
    'Consulting firms with structured service offerings',
    'Service catalogs and product directories',
    'Complex product offerings with many sections',
    'Documentation-style marketing sites',
  ],
};
