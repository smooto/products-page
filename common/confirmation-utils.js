export function removeConfirmation(parentElement, divQuery) {
    let divToRemove = parentElement.querySelector(divQuery);

    if (divToRemove) { parentElement.removeChild(divToRemove); }
}

export function createConfirmation(quantitySelected, product) {
    // create element
    const newDiv = document.createElement('div');

    // populate text content based on quantity
    let productName = product.name;
    if (quantitySelected > 1) { productName += 's'; }
    newDiv.textContent = `${quantitySelected} ${productName} added to cart!`;

    // add class for styling purposes
    newDiv.classList.add('confirm-cart-add');

    // add class for one-time animation
    newDiv.classList.add('confirm-animated');

    // return confirmation div, to be appended to parent element
    return newDiv;
}