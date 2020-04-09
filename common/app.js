// import product data
import products from '../products/products.js';
import renderProducts from '../products/render-products.js';

// get container from DOM
const container = document.getElementById('products-container');

// render products on page
renderProducts(products, container);