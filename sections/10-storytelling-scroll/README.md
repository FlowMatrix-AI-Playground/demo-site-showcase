# 10 -- Storytelling Scroll

## Design Philosophy

Scroll-triggered reveals, progressive narrative, and sequential discovery. The page is not a collection of sections -- it is a story with chapters. Each section builds on the previous one, and the user's scroll position drives every animation, reveal, and transition. The color palette itself evolves from cool to warm as the narrative progresses, mirroring a story arc that moves from introduction through conflict to resolution.

## UX Pattern

The user opens on a fullscreen dark hero -- Chapter 1 -- with a bold headline and cool blue/silver tones. Parallax depth creates a sense of entering the story. Scrolling reveals a rich-text narrative section where prose appears line by line, pulling the reader into the brand's origin or mission.

A full-width media break serves as a visual chapter divider. Then features are revealed one at a time using scroll-locked animations -- each feature holds the scroll position while its content animates in, then releases to the next. This forces sequential reading rather than skimming.

The stats section marks the story's midpoint with an accent background and numbers that count up from zero. Color temperature begins shifting warmer here. The steps section uses a timeline with a connecting SVG line that draws itself as the user scrolls, visually representing progress. Testimonials fade in one at a time as individual story chapters, now in warm terracotta tones.

The page closes with a fade-to-black transition into a dark CTA section -- the final chapter -- where a gold-accented button resolves the narrative.

A floating sidebar with dot markers shows the user's reading progress throughout. Hover interactions are intentionally minimal because scroll is the primary interaction.

Eight sections total: title-card hero, narrative prose, media break, sequential features, counting stats, drawing timeline, chapter testimonials, and closing CTA.

## When to Use

- Brand stories where the narrative matters as much as the product
- Product launches and reveal campaigns that benefit from sequenced discovery
- Annual reports or impact summaries with data that should be experienced, not just read
- Mission-driven organizations (nonprofits, social enterprises, cause brands)
- Founders' stories or "how we got here" marketing pages

## When NOT to Use

- Utility-first sites where users need to find information quickly (the scroll-locking will frustrate them)
- E-commerce or product-heavy sites where users want to browse freely
- Businesses with minimal story to tell -- the template demands rich narrative content
- Audiences with accessibility concerns around scroll-jacking and motion (provide a reduced-motion fallback)
- Clients who want a fast, scannable experience -- this template deliberately slows the user down
