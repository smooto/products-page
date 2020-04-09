// import data
import smoopProductList from '../data/product-db.js'; // product db

// import functions
import renderCart from './render-cart.js';
import { getCart } from '../common/cart-api.js';

// get DOM elements
const emptyCartMsg = document.getElementById('nothing-in-cart');
const wholeTable = document.getElementById('whole-table');
const checkoutButton = document.getElementById('checkout-button');

// get current cart from local storage
let currentCart = getCart();

// determine whether json cart contains any items
// if so, render and display cart table
if (currentCart) {
    emptyCartMsg.classList.add('hidden');
    wholeTable.classList.remove('hidden');
    renderCart(currentCart, smoopProductList);
}
// otherwise, disable checkout button, hide table, & show "nothing in cart" text instead
else {
    emptyCartMsg.classList.remove('hidden');
    wholeTable.classList.add('hidden');
    checkoutButton.disabled = true;
}

// add functionality for checkout button

checkoutButton.addEventListener('click', () => {
    const cartContents = JSON.stringify(currentCart, true, 2);
    alert(cartContents);
    localStorage.removeItem('cart');
    window.location.href = '/';
});