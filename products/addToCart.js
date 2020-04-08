import { findById } from '../common/utils.js';

function addToCart(product) {
    // get cart item from localStorage
    let jsonCart = localStorage.getItem('cart');
    // init staging cart -- this "picks up" the item before it's put into the jsonCart
    let stagingCart = [];
    
    // check if there's data in localStorage cart item
    // if data is present, re-init stagingCart to include the parsed JSON data
    if (jsonCart) { stagingCart = JSON.parse(jsonCart); }

    // search staging cart for product & store result (either null or object)
    let targetProduct = findById(stagingCart, product.id);

    // check if target product already exists as a line item in cart
    // if line item doesn't exist (findById returns null), add it to cart
    if (!targetProduct) {
        const lineItem = {
            id: product.id,
            quantity: 1 // each button click adds 1 item; this is the first of this item
        };
        stagingCart.push(lineItem);
    }
    // if line item does exist, increment value of existing quantity by 1
    else {
        targetProduct.quantity++;
    }

    // set JSON cart to reflect (serialized) changes to staging cart
    jsonCart = JSON.stringify(stagingCart);
    // set localStorage cart item value to updated array
    localStorage.setItem('cart', jsonCart);
}

export default addToCart;