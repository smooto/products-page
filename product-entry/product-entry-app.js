import addProduct from './add-product.js';

// get form element and submit button from DOM
const newProductForm = document.getElementById('new-product-form');

newProductForm.addEventListener('submit', (e) => {
    // prevent button from reloading page
    e.preventDefault();

    // get form inputs, store as new object
    const productData = new FormData(newProductForm);

    const newProductObject = {
        id: productData.get('id'),
        name: productData.get('name'),
        image: productData.get('image'),
        description: productData.get('description'),
        category: productData.get('category'),
        price: productData.get('price'),
        cost: productData.get('cost')
    };

    console.log(newProductObject);

    // add new object to product list
    addProduct(newProductObject);
});