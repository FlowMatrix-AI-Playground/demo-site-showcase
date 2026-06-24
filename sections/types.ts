export interface TemplateDefinition {
  /** Unique slug matching directory name (e.g., "01-minimal-scroll") */
  id: string;

  /** Display name (e.g., "Minimal Scroll") */
  name: string;

  /** One-sentence design philosophy */
  philosophy: string;

  /** 3-5 style keywords */
  keywords: string[];

  /** Section types in order (from marketing-site-engine's 20 types) */
  sectionComposition: SectionEntry[];

  /** How the user navigates and interacts */
  interactionModel: InteractionModel;

  /** 2-3 suggested font pairings (heading + body) */
  suggestedFonts: FontPairing[];

  /** Color strategy rules (not fixed colors) */
  colorStrategy: ColorStrategy;

  /** Industries/tones this template fits best */
  bestFor: string[];
}

export interface SectionEntry {
  type: string;
  variant?: string;
  background?: 'default' | 'muted' | 'accent' | 'inverted';
  notes?: string;
}

export interface InteractionModel {
  navigation: 'scroll-single-page' | 'multi-page' | 'sidebar-panel' | 'tab-based';
  scrollBehavior: 'smooth' | 'snap' | 'parallax' | 'scroll-triggered' | 'standard';
  transitions: 'fade' | 'slide' | 'morph' | 'view-transitions' | 'none' | 'jarring-cut';
  hoverDensity: 'minimal' | 'moderate' | 'rich';
  keyInteractions: string[];
}

export interface FontPairing {
  heading: string;
  body: string;
  googleFonts: string[];
}

export interface ColorStrategy {
  balance: string;
  preferredMode: 'light' | 'dark' | 'either';
  tonePattern: ('default' | 'muted' | 'accent' | 'inverted')[];
  notes: string;
}
