# DOM Structure — Binary Boutique

This document records the expected DOM structure and key component IDs/classes used across the site. Use it as a reference for development, tests, and accessibility checks.

Purpose

- Centralize the HTML outline for pages and reusable components.
- Provide stable IDs/classes for scripts and CSS.
- Help reviewers understand page structure quickly.

Global layout (site-wide)

- `html`
  - `head` (meta, title, CSS)
  - `body`
    - `main`
      - `marquee`
      - `header` (site header/navigation)
      - main `section` or `div` with class `page` for page content
      - `footer`
    - scripts (`main.js`, per-page scripts)

Header (shared)

- `header`
  - `button.menu-btn` — mobile menu toggle
  - `h1.logo` — site brand
  - `nav > ul > li > a` — main navigation links
  - control buttons container (search, cart, account icons)

Footer (shared)

- `footer`

  - site title and short blurb
  - `.footer-links` — grouped lists (`ul`) with headings (`h3`)
  - `.copyright`

- No-results block
  - `div.no-results#noResults` — contains a message when search/filters return no items

Per-page outlines

`products.html`

- `main`
  - `marquee` (optional site message)
  - `header` (see header above)
  - `section.page`
    - `div.container`
      - `h2` — page heading ("All Products")
      - `.products-controls`
        - `.search-bar > input#searchInput` — free-text search
        - `.filters`
          - `select#categoryFilter`
          - `select#priceFilter`
          - `select#sortFilter`
      - `.products-results > p#resultsCount` — results count text
      - `.products#productsGrid` — grid container where product cards are injected
      - `div#noResults.no-results[style=display:none]` — empty state
  - `footer`
  - scripts: `main.js`, `products.js`

`product-detail.html`

- `main`
  - `marquee`
  - `header`
  - `div.container.page`
    - `div.product-detail#productDetail`
      - `.image-wrap > img#productImage`
      - `.info`
        - `h2#productName`
        - `p.price#productPrice`
        - `p#productDescription`
        - `p#productCategory`
        - `.product-ratings#productRating` (child `.stars#productStars` and `p#productRatingValue`)
        - `button.btn` — Add to Cart
    - `div#productNotFound.no-results[style=display:none]` — fallback if product missing
  - various `.products` sections for related items (e.g. `#newArrivals`, `#topSelling`)
  - `footer`
  - scripts: `main.js`
