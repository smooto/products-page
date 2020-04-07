function createProducts(product) {
    // create new li
    const li = document.createElement('li');

    // create elements to be populated from product data
    const image = document.createElement('img');
    const name = document.createElement('h3');
    const price = document.createElement('p');
    const desc = document.createElement('p');
    const button = document.createElement('button');

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

    // add product id and display text to button
    button.id = product.id;
    button.textContent = 'Add to cart';

    // append new elements to li
    li.appendChild(image);
    li.appendChild(name);
    li.appendChild(price);
    li.appendChild(desc);
    li.appendChild(button);
    
    // return li
    return li;
}

export default createProducts;