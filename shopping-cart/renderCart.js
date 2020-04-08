import renderLineItems from './render-line-items.js';
import { findById, calcOrderItem } from '../common/utils.js';

function renderCart(cartArray, productArray) {
    ////// render line items w/ total line costs
    // get table elements from DOM
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

    ////// render total cost of order
    // get total cost cell from DOM
    const costCell = document.getElementById('total-cost');

    // call total cost function, store result
    const orderCost = calcOrderItem(cartArray, productArray);

    // write orderCost to cell
    costCell.textContent = `$${orderCost}.00`;
}

export default renderCart;