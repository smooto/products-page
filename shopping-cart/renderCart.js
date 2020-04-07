import renderLineItems from './render-line-items.js';
import { findById } from '../common/utils.js';

function renderCart(cartArray, productArray) {
    // get table from DOM
    const table = document.getElementById('cart-table');

    // loop through cart
    cartArray.forEach(cartItem => {
        // use findById to find targetProduct
        const targetProduct = findById(productArray, cartItem.id);

        // pass to DOM generator
        const newRow = renderLineItems(cartItem, targetProduct);
        
        // append to table
        // table.appendChild(newRow);
        table.appendChild(newRow);
    });
}

export default renderCart;