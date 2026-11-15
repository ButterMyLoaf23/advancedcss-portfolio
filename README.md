# Boston Wyatt — WDD 331R Advanced CSS

**Name:** Boston Wyatt
**Semester:** Fall 2026
**Live Site:** https://buttermyloaf23.github.io/advancedcss-portfolio/

This repository is my portfolio for WDD 331R: Advanced CSS. The homepage is the course-work catalog, and each assignment remains available in its own folder.

## Pages

- [Home](index.html)
- [Custom Properties — Ward Activity Board](unit1/custom-properties/Index.html)
- [Attribute Selectors Demo](unit2/attribute-selectors-demo.html)
- [Layered Components](unit2/layered-components/index.html)
- [Visual Effects Showcase](unit3/visual-effects/index.html)
- [Filter Performance Lab](unit3/visual-effects/performance.html)
<!-- I added these Unit 4 pages so the README matches the homepage links. -->
- [Editorial Grid Layout](unit4/grid-layouts/editorial.html)
- [Responsive Card Grid](unit4/grid-layouts/cards.html)
- [Logical Properties Demo](unit4/logical-properties/index.html)
- [Container Queries Demo](unit4/advanced/container-demo.html)
- [Sticky Module Demo](unit4/advanced/sticky-demo.html)
- [Masonry Layout Comparison](unit4/masonry/index.html)
- [Typography System Showcase](unit5/index.html)

## Typography system

The shared type system lives in `css/tokens/variables.css`. It uses a major-third modular scale with fluid `clamp()` steps for larger headings, semantic role tokens for body and heading sizes, and DM Sans for headings. The Google Fonts request uses `display=swap`, so the system font remains visible while the custom font loads. Shared base and Unit 4 styles consume the role tokens instead of hard-coding heading sizes.


## Theme support

The site now supports light mode, dark mode, and your system default option. Color seeds, the OKLCH accent ramp, and semantic `light-dark()` tokens live in `css/tokens/colors.css`. The theme styles are in `css/components/theme-toggle.css`, and `js/theme-preference.js` saves the selected preference in `localStorage` so it remains when any user returns the site still has their preference for the theme still active.

