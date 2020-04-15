import { getProducts, setProducts } from './product-api.js';

function addProduct(newProductObject) {
    // get product list from local storage
    let parsedList = getProducts();

    // push new product to products array
    parsedList.push(newProductObject);

    // set local storage to reflect updated list
    setProducts(parsedList);
}

export default addProduct;