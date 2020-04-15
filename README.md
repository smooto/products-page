# Alchemy 201 lab: E-Commerce site

_March 6 - 9, 2020_

## Modular flow

```
| index.html
|   //// Styling ////
|   |-- common/main.css
|
| shop.html
|   //// Styling ////
|   |-- common/main.css
|   |   |-- shop/shop.css
|    
|   //// Scripting ////
|   |-- shop/shop-app.js
|   |   |-- shop/render-products.js (combines li outputs from create-product)
|   |   |   |-- shop/create-product.js (generates individual li outputs for each product)
|
| cart.html
|   //// Styling ////
|   |-- common/main.css
|   |   |-- shopping-cart/cart.css
|
|   //// Scripting ////
|   |-- shopping-cart/cart-app.js
|   |   |-- shopping-cart/render-cart.js
|   |   |   |-- shopping-cart/render-line-items.js

```

## Project Notes

- Be mindful of function purity while TDDing
- Upgrades/improvements:
    - **Easy:** add function to clear out cart
    - ~~Rethink directory structure/file placement~~
    - Check relative linking conventions for consistency
    - Modularize CSS
    - JavaScript
        - ~~_important: move and rename "app.js" (not common, only applies to products page)_~~
        - Standardize naming conventions for JS files
            - Datasets vs exported functions
        - Pull out `select` & `option` functionality into a module, def have ideas but too tired atm
        - replace `alert` for place-order event function with something more pleasant
    - Accessibility
        - Specifically: how is cart-confirm functionality processed by screen-readers?

## Learning Notes

- Experimented with feature branches & merging to `dev`
    - The whole "graph theory" thing is starting to make more sense now