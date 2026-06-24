# Demo Site Showcase

Website demo generator for closing prospects. When a potential client is evaluating a website deal, this repo produces a browsable gallery of 6-10 fundamentally different website design variants -- each with distinct layout, UX flow, interactions, and visual style. The prospect visits a single URL, compares approaches side by side, and picks their favorite.

## What This Is

This is a **GitHub template repo**. Each prospect gets their own copy (e.g., `demo-btthrive`, `demo-acme`) scaffolded from this template. The template provides:

1. **A library of 10 website templates** (`sections/`) -- each defining a completely different design philosophy, from minimal Apple-style scrollers to bold brutalist layouts to dark premium glass-morphism
2. **An Astro gallery app** (`gallery/`) -- the prospect-facing showcase with a card grid, dedicated routes per variant, and full-page expand
3. **Build and scaffold scripts** (`scripts/`) -- utilities for creating new demo repos, building, and validating

## What It's Used For

- **Closing website deals** -- Instead of sending mockups or PDFs, deploy a live interactive gallery the prospect can browse on any device
- **Showing range** -- 6-10 variants covering different UX approaches demonstrates expertise and gives prospects real choices
- **Speed** -- The `/sales-demo-site` Claude skill automates the entire pipeline: prospect intel, design direction, variant generation, QA, deploy

## How It Works

### The Pipeline

```
1. Invoke /sales-demo-site skill with prospect context
2. Skill pulls prospect data from Twenty CRM + GWS + web research
3. Skill generates design direction via /eng-frontend-design
4. Skill selects 6-10 templates from sections/ library
5. Parallel agents build standalone HTML variant sites
6. Gallery app is populated with variant metadata
7. Everything deploys to Cloudflare Pages
8. Prospect receives a link to browse and compare
```

### The Output

```
demo-{client-slug}.pages.dev/
  /                    # Grid overview -- cards for all variants
  /variant-1/          # Dedicated page with full iframe preview
  /variant-2/          # Each variant has its own route
  ...
  /sites/              # Static HTML builds of each variant site
    variant-1/
    variant-2/
    ...
```

The prospect sees a dark-themed gallery grid, clicks into any variant for a full-page preview (with an "Expand Full Screen" button for immersive viewing), and navigates between variants via persistent nav.

## The 10 Templates

Each template in `sections/` defines a fundamentally different website approach -- not just different colors, but different layouts, navigation models, scroll behaviors, hover patterns, and UX philosophies.

| # | Template | Philosophy | Navigation | Key UX Trait |
|---|----------|-----------|------------|-------------|
| 01 | Minimal Scroll | Apple-style simplicity, whitespace | Single-page scroll | Section snap, fade-in reveals |
| 02 | Bold Brutalist | Raw, high-contrast, oversized type | Single-page scroll | Jarring cuts, glitch hover effects |
| 03 | Editorial Magazine | Content-rich, magazine layout | Single-page scroll | Scroll progress bar, parallax hero |
| 04 | Bento Card Grid | Modern SaaS, bento cards | Single-page scroll | Expandable cards, hover-reveal |
| 05 | Cinematic Hero | Full-screen heroes, atmospheric | Single-page scroll | Parallax layers, ambient effects |
| 06 | Split-Panel Explorer | Two-panel sidebar layout | Sidebar navigation | Sidebar-driven content switching |
| 07 | Playful Illustrated | Soft pastels, bouncy animations | Single-page scroll | Wobble, bounce, confetti micro-interactions |
| 08 | Dark Premium | Dark-first, glass morphism, glow | Single-page scroll | Ambient glow, depth layering |
| 09 | Multi-Page Corporate | Traditional multi-page, breadcrumbs | Multi-page | Standard navigation, 3 distinct pages |
| 10 | Storytelling Scroll | Scroll-triggered narrative | Single-page + chapters | Chapter markers, progressive reveals |

Each template includes:
- `template.config.ts` -- structured definition (sections, interactions, fonts, color strategy)
- `README.md` -- design philosophy, when to use, when NOT to use

### Selecting Templates for a Prospect

Not every template fits every prospect. The skill selects based on:
- **Industry** -- childcare/wellness skews toward Playful/Minimal; tech/fintech toward Dark Premium/Bento
- **Audience** -- B2B leans corporate; B2C can be more expressive
- **Tone** -- formal prospects get Corporate/Editorial; bold brands get Brutalist/Cinematic
- **Always include variety** -- at least one minimal, one bold, one interactive, one traditional

## How to Use

### Automated (recommended)

Invoke the `/sales-demo-site` skill in Claude Code. It handles the full pipeline automatically.

### Manual

1. **Scaffold a new demo:**
   ```bash
   pnpm run scaffold <client-slug>
   # Creates FlowMatrix-AI-Playground/demo-<client-slug> from this template
   ```

2. **Build variant sites:** Place standalone HTML files in `sites/variant-N/index.html` (one per variant)

3. **Populate gallery data:** Edit `gallery/src/data/variants.ts` with variant metadata (name, slug, theme colors, preview URL, sections list)

4. **Build:**
   ```bash
   nvm use 22          # Astro 6 requires Node >= 22.12.0
   pnpm install
   cd gallery && pnpm install && cd ..
   pnpm run build
   ```

5. **Deploy:**
   ```bash
   wrangler pages deploy dist/ --project-name demo-<client-slug>
   ```

### Adding or Editing Templates

See `sections/CONTRIBUTING.md` for the full guide. Quick version:

1. Create `sections/NN-slug-name/` directory
2. Write `template.config.ts` exporting a `TemplateDefinition` (see `sections/types.ts`)
3. Write `README.md` with philosophy, UX patterns, when to use
4. Register in `sections/index.ts`
5. Validate: `pnpm run validate`

## Development

```bash
nvm use 22
pnpm install
cd gallery && pnpm install && cd ..

# Dev server (gallery only)
pnpm run dev

# Full build (variants + gallery)
pnpm run build

# Validate all template configs
pnpm run validate
```

## Tech Stack

- **Astro 6** -- Static site generator for the gallery framework
- **TypeScript** -- Type-safe template definitions and build scripts
- **Cloudflare Pages** -- Primary deployment target (Vercel as approved fallback)
- **Node >= 22.12.0** -- Required by Astro 6

## Related

- **Skill:** `/sales-demo-site` in the toolbox repo (`library/skills/sales-demo-site/SKILL.md`)
- **Engine:** `FlowMatrix-AI/marketing-site-engine` -- the config-driven Astro pipeline that powers production client sites
- **Gallery reference:** `FlowMatrix-AI-Playground/site-flowmatrix-gallery` -- the original archetype showcase this repo evolved from
