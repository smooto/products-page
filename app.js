// import fruits data
import products from '/products/products.js';
import createProduct from '/products/createProduct.js';

// get elements from DOM
const container = document.getElementById('products-container');

// render products on page
function renderProducts(arrayOfProducts) {
    arrayOfProducts.forEach(product => {
        const li = createProduct(product);
        container.appendChild(li);
    });
}

renderProducts(products);