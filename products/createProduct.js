import addToCart from './addToCart.js';

function confirmCart(quantitySelected, product) {
    // create & append element
    const newDiv = document.createElement('div');
    // parentElem.appendChild(confirmAdd);

    // populate text content based on quantity
    let productName = product.name;
    if (quantitySelected > 1) { productName += 's'; }

    newDiv.textContent = `${quantitySelected} ${productName} added to cart!`;

    // add class for styling purposes
    newDiv.classList.add('confirm-cart-add');

    // add class for one-time animation
    newDiv.classList.add('confirm-animated');

    return newDiv;
}

function createProducts(product) {
    ////// create elements to be populated from product data
    
    // init li
    const li = document.createElement('li');
    
    // product info elements
    const image = document.createElement('img');
    const name = document.createElement('h3');
    const price = document.createElement('p');
    const desc = document.createElement('p');

    // user input elements
    const dropdown = document.createElement('select');
    const button = document.createElement('button');

    // define options for dropdown
    const quantOptions = [
        { element: 'option', value: 1, text: 1 },
        { element: 'option', value: 2, text: 2 },
        { element: 'option', value: 3, text: 3 },
        { element: 'option', value: 4, text: 4 },
        { element: 'option', value: 5, text: 5 }
    ];

    quantOptions.forEach(option => {
        const renderedOption = document.createElement(option.element);
        renderedOption.value = option.value;
        renderedOption.textContent = option.text;

        dropdown.appendChild(renderedOption);
    });

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
        const quantitySelected = parseInt(dropdown.value);
        addToCart(product, quantitySelected);


        ////// cart-confirmation (with panache)

        // in order to replay CSS animation with non-infinite iteration count, the whole element has to be re-initialized. in this case, we want to re-init on each "add to cart" click.
        // however, we also don't want to bog down the rendered HTML too many extraneous divs.
        
        // so, let's first check for any existing confirmation divs, and if we find one, remove it from the parent element before generating another one.

        let divToRemove = li.querySelector('.confirm-animated');

        if (divToRemove) { li.removeChild(divToRemove); }
        else { divToRemove = null; }

        // then, we can continue on to generate the new div, and append it to the parent element.

        const confirmDiv = confirmCart(quantitySelected, product);
        li.appendChild(confirmDiv);
    });

    ////// append new elements to li
    li.appendChild(image);
    li.appendChild(name);
    li.appendChild(price);
    li.appendChild(desc);
    li.appendChild(dropdown);
    li.appendChild(button);
    
    // return li
    return li;
}

export default createProducts;