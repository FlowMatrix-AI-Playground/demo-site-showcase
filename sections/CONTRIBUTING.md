# Template Library -- Contributing Guide

How to add, edit, and validate templates in the `sections/` directory.

## Adding a New Template

1. **Create a directory** using the naming convention `NN-slug-name`, where `NN` is the next two-digit number in sequence and `slug-name` is a lowercase kebab-case descriptor. Example: `11-floating-dashboard`.

2. **Write `template.config.ts`** exporting a single named constant that satisfies the `TemplateDefinition` type from `sections/types.ts`. Example:

   ```ts
   import type { TemplateDefinition } from '../types.js';

   export const floatingDashboard: TemplateDefinition = {
     id: '11-floating-dashboard',
     name: 'Floating Dashboard',
     philosophy: 'Data-forward layout with hovering metric cards.',
     keywords: ['dashboard', 'data', 'cards'],
     sectionComposition: [
       { type: 'hero', variant: 'stats-focused' },
       { type: 'features', background: 'muted' },
     ],
     interactionModel: {
       navigation: 'scroll-single-page',
       scrollBehavior: 'smooth',
       transitions: 'fade',
       hoverDensity: 'rich',
       keyInteractions: ['card hover reveal', 'sticky metric bar'],
     },
     suggestedFonts: [
       { heading: 'DM Sans', body: 'Inter', googleFonts: ['DM Sans', 'Inter'] },
     ],
     colorStrategy: {
       balance: '60% neutral / 30% primary / 10% accent',
       preferredMode: 'dark',
       tonePattern: ['default', 'muted', 'accent'],
       notes: 'Vibrant accent pops against dark neutral base.',
     },
     bestFor: ['SaaS', 'analytics', 'fintech'],
   };
   ```

3. **Write a `README.md`** in the same directory describing the template's design intent, target industries, and any special notes.

4. **Register the template** in `sections/index.ts` -- add an import for your config and append the exported constant to the `templates` array.

## Editing an Existing Template

1. Open the template's `template.config.ts` and make your changes.
2. Run validation to confirm the config still satisfies the type contract (see below).
3. Update the template's `README.md` if your changes affect the design intent or usage notes.

## Type Reference

All templates implement `TemplateDefinition` from `sections/types.ts`. Key interfaces:

- **TemplateDefinition** -- top-level config with id, name, philosophy, keywords, sections, interaction model, fonts, colors, and best-for tags.
- **SectionEntry** -- describes one section: type, optional variant, background mode, and notes.
- **InteractionModel** -- navigation style, scroll behavior, transitions, hover density, and key interactions.
- **FontPairing** -- heading font, body font, and Google Fonts array.
- **ColorStrategy** -- balance ratio, preferred color mode, tone pattern, and notes.

See `sections/types.ts` for the full definitions.

## Validation

Run the validation script to check all template configs:

```sh
pnpm run validate
```

This ensures every `template.config.ts` exports a valid `TemplateDefinition` and that directory naming conventions are followed.

## Naming Convention

Directories follow the pattern `NN-slug-name`:

- `NN` is a zero-padded two-digit sequence number (01, 02, ... 10, 11, ...).
- `slug-name` is lowercase kebab-case, matching the template's `id` field.
- The `id` field in `template.config.ts` must exactly match the directory name.

## Rules

- No em dashes. Use `--` for inline separators when needed.
- Keep one exported constant per `template.config.ts` file.
- Every template directory must contain both `template.config.ts` and `README.md`.
