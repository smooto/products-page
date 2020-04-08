export function findById(array, itemId) {    
    let foundItem = null;
    
    array.forEach(element => {
        if (element.id === itemId) { foundItem = element; }
    });

    return foundItem;
}

export function calcLineItem(quantity, itemPrice) {
    let lineCost = quantity * itemPrice;
    return lineCost;
}

export function calcOrderItem(cartArray, productArray) {
    let cartTotal = 0;

    cartArray.forEach(lineItem => {
        const product = findById(productArray, lineItem.id);
        const quantity = lineItem.quantity;
        const itemPrice = product.price;

        const lineTotal = calcLineItem(quantity, itemPrice);

        cartTotal += lineTotal;
    });

    return cartTotal;
}