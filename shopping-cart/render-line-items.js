import { calcLineItem } from '../common/utils.js';

function renderLineItems(lineItem, targetProduct) {
    // init DOM elements to be populated
    const newRow = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdCost = document.createElement('td');

    // calculate line cost
    const lineCost = calcLineItem(lineItem.quantity, targetProduct.price);

    // populate DOM elements with price data and line cost
    tdName.textContent = targetProduct.name;
    tdQuantity.textContent = lineItem.quantity;
    tdCost.textContent = `$${lineCost}.00`;

    // append new elements to new row
    newRow.appendChild(tdName);
    newRow.appendChild(tdQuantity);
    newRow.appendChild(tdCost);

    return newRow;
}

export default renderLineItems;