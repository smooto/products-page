// import product data
import products from './products.js';
import renderProducts from './render-products.js';

// get container from DOM
const container = document.getElementById('products-container');

// render products on page
renderProducts(products, container);