# Alchemy 201 lab: E-Commerce site

_March 6 - 8, 2020_

## Structure

```
shop.html
|-- shop-style.css
|-- shop-app.js
    |-- render-products.js (combines li outputs from createProduct)
        |-- createProduct.js (generates individual li outputs for each product)
        
```

## Notes

- Be mindful of function purity while TDDing
- Upgrades/improvements:
    - **Easy:** add function to clear out cart
    - Rethink directory structure/file placement
    - Check relative linking conventions for consistency
    - Modularize CSS
    - Reorganize JS modules
        - _important: move and rename "app.js" (not common, only applies to products page)_
        - Standardize naming conventions for JS files
            - Datasets vs exported functions
        - Pull out `select` & `option` functionality into a module, def have ideas but too tired atm
    - Accessibility
        - Specifically: how is cart-confirm functionality processed by screen-readers?