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