# Demo Site Showcase

Template repo for prospect website demo showcases. Each template in the `sections/` library defines a distinct website style -- from minimal single-page scrollers to bold brutalist layouts -- that can be composed into client-specific demo variants.

## How It Works

### sections/ -- Template Library

The `sections/` directory contains 10 website templates, each in its own numbered folder (e.g., `01-minimal-scroll/`, `02-bold-brutalist/`). Every template folder includes:

- **template.config.ts** -- A `TemplateDefinition` export describing the template's design philosophy, section composition, interaction model, font pairings, color strategy, and best-fit industries.
- **README.md** -- Human-readable overview of the template with screenshots and usage notes.

All template types are defined in `sections/types.ts` and aggregated in `sections/index.ts`.

### gallery/ -- Astro Showcase App

An Astro 6 static site that renders:

- A **grid overview** page showing all available templates at a glance.
- **Variant detail pages** for each template, displaying live previews and configuration details.

### scripts/

- `build-variants.js` -- Compiles template variants into the gallery's data layer before the Astro build.
- `scaffold-demo.ts` -- Scaffolds a new client demo from a template.
- `validate-configs.ts` -- Validates all template config files against the `TemplateDefinition` type.

## Adding a New Template

1. Create a new directory in `sections/` following the naming pattern: `NN-slug-name/`
2. Add a `template.config.ts` that exports a `TemplateDefinition` object (see `sections/types.ts` for the full interface).
3. Add a `README.md` with a description and any design notes.
4. Import and register it in `sections/index.ts`.
5. Run `pnpm run validate` to check your config.

## Scaffolding a Client Demo

```bash
pnpm run scaffold <client-slug>
```

This creates a new variant directory pre-configured from a selected template, ready for client-specific customization.

## Development

```bash
# Install dependencies
pnpm install
cd gallery && pnpm install

# Start the gallery dev server
pnpm run dev

# Build everything (variants + gallery)
pnpm run build

# Build gallery only
pnpm run build:gallery
```

## Deployment

The gallery builds to static HTML and deploys to **Cloudflare Pages**. Run `pnpm run build` and deploy the `gallery/dist/` output directory.

## Tech Stack

- **Astro 6** -- Static site generator for the gallery
- **TypeScript** -- Type-safe template definitions and scripts
- **Cloudflare Pages** -- Hosting and deployment
