import smoopProductList from '../data/product-db.js';

export function getProducts() {
    // first, retrieve existing products list
    let currentJsonList = localStorage.getItem('PRODUCT-LIST');

    // check whether list is empty; if so, re-initialize it with product list from db
    if (!currentJsonList) {
        const stringyList = JSON.stringify(smoopProductList);
        localStorage.setItem('PRODUCT-LIST', stringyList);
        currentJsonList = localStorage.getItem('PRODUCT-LIST');
    }

    // parse JSON list
    const parsedList = JSON.parse(currentJsonList);

    // return parsed list
    return parsedList;
}

export function setProducts(parsedList) {
    const currentJsonList = JSON.stringify(parsedList);
    localStorage.setItem('PRODUCT-LIST', currentJsonList);
}