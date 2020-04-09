import smoopProductList from '../data/product-db.js';

function addProduct(newProductObject) {
    // first, retrieve existing products list
    let currentJsonList = localStorage.getItem('PRODUCT-LIST');

    // check whether list is empty; if so, re-initialize it with product list from db
    if (!currentJsonList) {
        const stringyList = JSON.stringify(smoopProductList);
        localStorage.setItem('PRODUCT-LIST', stringyList);
        currentJsonList = localStorage.getItem('PRODUCT-LIST');
    }

    let parsedList = JSON.parse(currentJsonList);

    // push new product to products array
    parsedList.push(newProductObject);

    // set local storage item to updated list
    currentJsonList = JSON.stringify(parsedList);
    localStorage.setItem('PRODUCT-LIST', currentJsonList);
}

export default addProduct;