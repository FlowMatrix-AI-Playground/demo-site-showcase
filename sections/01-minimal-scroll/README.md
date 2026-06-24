# 01 -- Minimal Scroll

## Design Philosophy

Apple-style simplicity. One page, generous whitespace, smooth scroll anchors. Every element earns its place. If something does not directly serve the message, it gets removed. The design communicates quality through restraint -- empty space is not wasted space, it is intentional framing.

## UX Pattern

The user lands on a centered hero and scrolls through a single continuous page. Sections fade in gently as they enter the viewport via IntersectionObserver. Navigation is a sticky minimal bar with a thin scroll progress indicator. On desktop, CSS scroll-snap locks each section into view. CTAs use a subtle 1.02x scale on hover -- just enough to feel responsive without breaking the calm tone.

The entire page uses only six sections: hero, logo bar, features (capped at three), a full-width media break, a single testimonial, and one accent CTA. Nothing competes for attention.

## When to Use

- Premium services or consulting firms that sell on trust and expertise
- SaaS landing pages that need to communicate one clear value proposition
- Personal brand sites for executives, authors, or speakers
- Luxury products where the aesthetic must feel expensive and restrained
- Any project where "less is more" is the actual requirement, not just a phrase

## When NOT to Use

- Content-heavy businesses with lots of case studies, blog posts, or documentation
- E-commerce or marketplace sites that need dense product grids
- Brands with a loud, energetic, or playful personality
- Projects that require multi-page navigation or complex information architecture
- Clients who equate "more sections" with "more value" -- this template will feel too sparse for them
