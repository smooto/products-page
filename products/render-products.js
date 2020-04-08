import createProduct from './createProduct.js';

function renderProducts(arrayOfProducts, container) {
    arrayOfProducts.forEach(product => {
        const li = createProduct(product);
        container.appendChild(li);
    });
}

export default renderProducts;