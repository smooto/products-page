// import data
import products from '../products/products.js'; // product db

// import functions
import renderCart from './renderCart.js';

// get DOM elements
const emptyCartMsg = document.getElementById('nothing-in-cart');
const wholeTable = document.getElementById('whole-table');
const checkoutButton = document.getElementById('checkout-button');

// retrieve cart data from local storage
let jsonCart = localStorage.getItem('cart');

// parse cart data
let currentCart = JSON.parse(jsonCart);

// determine whether json cart contains any items
// if so, render and display cart table
if (jsonCart) {
    emptyCartMsg.classList.add('hidden');
    wholeTable.classList.remove('hidden');
    renderCart(currentCart, products);
}
// otherwise, disable checkout button, hide table, & show "nothing in cart" text instead
else {
    emptyCartMsg.classList.remove('hidden');
    wholeTable.classList.add('hidden');
    checkoutButton.disabled = true;
}