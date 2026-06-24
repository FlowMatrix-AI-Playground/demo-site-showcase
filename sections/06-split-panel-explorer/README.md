# 06 -- Split Panel Explorer

## Design Philosophy

Two-panel layout with persistent sidebar navigation. Content discovery through structured exploration, not passive scrolling. This template is desktop-first in its thinking -- the sidebar gives users a map of the content and lets them jump directly to what they care about. It trades the cinematic full-width experience for utility and wayfinding.

## UX Pattern

The user lands on a split layout: a persistent dark sidebar on the left with section links, and a light content area on the right. The hero fills the right panel with a bold headline. As the user scrolls the content area, the sidebar highlights the active section automatically. Clicking a sidebar link scrolls the right panel to that section smoothly.

Features use an expand/collapse accordion pattern so users can drill into details without navigating away. The about section provides company story on a muted background. The portfolio section offers a gallery view within the content panel. The page ends with a muted contact section containing a form and company details.

On mobile, the sidebar collapses into a hamburger menu, and the layout becomes a standard single-column scroll. Content panels animate in from the right when changing sections via the sidebar.

Five sections total: split-left hero, expandable features, muted about, gallery portfolio, and muted contact.

## When to Use

- Agencies that need to showcase portfolios alongside service descriptions
- Consulting firms with structured, multi-category service offerings
- Service catalogs or product directories where users need to compare and explore
- Companies with complex offerings that benefit from persistent navigation
- Marketing sites that need to feel more like an app than a brochure

## When NOT to Use

- Mobile-first projects where the majority of traffic comes from phones -- the sidebar pattern loses its advantage on small screens
- Brands that rely on full-width visuals or cinematic impact -- the split layout constrains image real estate
- Simple landing pages with only 2-3 sections -- the sidebar adds unnecessary complexity
- Clients who want a "wow" first impression -- this template prioritizes utility over spectacle
- Projects where the content is not structured enough to benefit from section-based navigation
