// import product data
import smoopProductList from '../data/product-db.js';
import renderProducts from './render-products.js';

// get container from DOM
const container = document.getElementById('products-container');

// render products on page
renderProducts(smoopProductList, container);