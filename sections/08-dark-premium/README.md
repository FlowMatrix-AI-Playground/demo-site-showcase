# 08 -- Dark Premium

## Design Philosophy

Dark-first with subtle gradients, glow effects, and glass morphism. This is the Stripe/Linear aesthetic -- near-black surfaces, layered glass cards, and gradient accents that make software feel expensive. Depth comes from backdrop-blur and glow effects, not from color variation. The entire page lives in darkness, with light used only as accent and emphasis.

## UX Pattern

The user lands on a fullscreen dark hero with an ambient gradient background that shifts subtly as they scroll. A bold headline with a faint glow effect establishes the premium tone immediately. Scrolling reveals a muted logo bar (monochrome, low opacity), followed by glass-morphism feature cards -- each with a semi-transparent background, heavy backdrop-blur, and a glowing border that intensifies on hover.

The stats section uses animated number counters with soft radial glows behind each figure. Testimonials continue the glass card pattern with subtle border illumination. The pricing section is the visual climax -- the featured tier has an animated gradient border that cycles slowly through the accent palette, making it impossible to ignore. The page closes with a gradient CTA section that breaks the dark monotone with a bold accent wash.

Parallax depth layers keep the background gradients moving slower than foreground content, and Astro View Transitions provide smooth route changes throughout.

Seven sections total: fullscreen hero, subtle logo bar, glass feature cards, glowing stats, glass testimonials, gradient-border pricing, and gradient CTA.

## When to Use

- Developer tools, APIs, and technical SaaS products
- Fintech, crypto, or blockchain platforms
- AI/ML products and data-heavy dashboards
- Premium software targeting technical or design-savvy audiences
- Any brand where the product itself lives in a dark UI (the marketing site should match)

## When NOT to Use

- Brands targeting non-technical or older demographics who expect light backgrounds
- Healthcare, education, or government sites where accessibility and readability are paramount
- Businesses in warm, friendly industries (food, pets, children) -- dark themes feel cold
- Print-heavy brands that need the site to match light collateral
- Clients who specifically request "bright and clean" -- this template is the opposite of that
