import { addToCart } from '../common/cart-api.js';

function removeConfirmation(parentElement, divQuery) {
    let divToRemove = parentElement.querySelector(divQuery);

    if (divToRemove) { parentElement.removeChild(divToRemove); }
}

function createConfirmation(quantitySelected, product) {
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

function createProducts(product) {
    ////// first, create elements to be populated from product data
    
    //// init parent element
    const li = document.createElement('li');
    
    //// product info elements
    const image = document.createElement('img');
    li.appendChild(image);

    const name = document.createElement('h3');
    li.appendChild(name);
    
    const price = document.createElement('p');
    li.appendChild(price);
    
    const desc = document.createElement('p');
    li.appendChild(desc);

    //// user input elements

    // we're creating two kinds of user inputs for each product:
    // - a dropdown menu that allows the user to choose the amount of the product to add to the cart
    // - a button that will add the selected quantity of items to the cart

    // the dropdown consists of a `select` element with several `option` elements as children
    const dropdown = document.createElement('select');
    li.appendChild(dropdown);

    // define options for dropdown
    const quantOptions = [
        { element: 'option', value: 1, text: 1 },
        { element: 'option', value: 2, text: 2 },
        { element: 'option', value: 3, text: 3 },
        { element: 'option', value: 4, text: 4 },
        { element: 'option', value: 5, text: 5 }
    ];

    // create a DOM element for each option, and add each of those elements as a child of the dropdown element
    quantOptions.forEach(option => {
        const renderedOption = document.createElement(option.element);
        renderedOption.value = option.value;
        renderedOption.textContent = option.text;

        dropdown.appendChild(renderedOption);
    });

    //// button!!!!!

    const button = document.createElement('button');
    li.appendChild(button);

    ////// set element properties/values

    // add common product class to li, as well as specific class based on product category
    li.classList.add('product', product.category);

    // add extra class to desc, for styling
    desc.classList.add('product-desc');

    // route image source to appropriate file
    image.src = product.image;

    // populate text elements based on object values
    name.textContent = product.name;
    price.textContent = `$${product.price.toFixed(2)}`;
    desc.textContent = product.description;

    // add product id, display text, and event listener to button
    button.id = product.id;
    button.textContent = 'Add to cart';
    button.addEventListener('click', () => {
        // we want these things to happen on click:
        // - retrieve and utilize the user's selected quantity
        // - add selected amount of target item to local storage
        // - update UI in some way to notify user that the addition was successful

        const quantitySelected = parseInt(dropdown.value); // default `option` values are strings, need to be numberized for this
        addToCart(product, quantitySelected);

        ////// cart-confirmation (with panache)

        // the goal here is to replace the outmoded `alert()` with something a little bit nicer -- a notification that fades in, displays briefly, then fades back out. this animation should re-render on every click.

        // in order to replay CSS animations with non-infinite iteration counts, the whole element has to be re-initialized. in this case, we want to re-init on each "add to cart" click.
        // however, we also don't want to bog down the rendered HTML too many extraneous divs.
        
        // so, let's first check the parent element for any existing confirmation divs, and if we find one, remove it from the parent element before generating another one.

        removeConfirmation(li, '.confirm-animated');

        // then, we can continue on to generate the new div, and append it to the parent element.

        const confirmDiv = createConfirmation(quantitySelected, product);
        li.appendChild(confirmDiv);
    });

    // return parent element, to be eaten by some other thing
    return li;
}

export default createProducts;