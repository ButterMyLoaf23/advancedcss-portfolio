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

## Architecture

```text
css/
├── base/          reset.css, elements.css
├── components/    portfolio.css
├── layout/        primary.css
├── tokens/        colors.css, variables.css
├── utilities/     utilities.css
└── main.css       layer order and imports
dist/styles.css    bundled build receipt
```

The source stylesheet starts with the five-layer stack `tokens, base, layout, components, utilities`. Each layer is imported from `css/main.css`, so the browser loads the same shared token system and component styles used by the homepage.

## Build

This project uses PostCSS with `postcss-import` to bundle imports and `cssnano` to minify the result.

```bash
npm install
npm run build
```

The build reads `css/main.css` and writes the minified receipt to `dist/styles.css`. `node_modules/` is ignored, while `dist/styles.css` is intentionally tracked for GitHub reviewers.

For GitHub Pages, select **Deploy from a Branch**, choose the `website` branch, and choose the repository root (`/`). The current remote contains only `main`, so the existing Unit 1 workflow/branch still needs to be restored or created in GitHub before that setting can be selected.
