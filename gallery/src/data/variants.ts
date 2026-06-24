export interface VariantData {
  slug: string;
  name: string;
  templateId: string;
  tagline: string;
  theme: {
    primaryColor: string;
    accentColor: string;
    fontHeading: string;
  };
  previewUrl: string;
  sections: string[];
}

// Placeholder -- replaced during demo scaffold
export const variants: VariantData[] = [
  {
    slug: 'variant-1',
    name: 'Minimal Scroll',
    templateId: '01-minimal-scroll',
    tagline: 'Clean, focused, elegant',
    theme: { primaryColor: '#1a1a2e', accentColor: '#e94560', fontHeading: 'DM Serif Display' },
    previewUrl: '/sites/variant-1/',
    sections: ['hero', 'logo-bar', 'features', 'media', 'testimonials', 'cta'],
  },
  {
    slug: 'variant-2',
    name: 'Bold Brutalist',
    templateId: '02-bold-brutalist',
    tagline: 'Raw, unapologetic, loud',
    theme: { primaryColor: '#000000', accentColor: '#ff2d55', fontHeading: 'Bebas Neue' },
    previewUrl: '/sites/variant-2/',
    sections: ['hero', 'features', 'stats', 'testimonials', 'media', 'steps', 'cta'],
  },
];

export const prospectName = 'Demo Prospect';
export const prospectTagline = 'Website Design Options';
