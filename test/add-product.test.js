import addProduct from '../product-entry/add-product.js';

const test = QUnit.test;

test('addProduct', function(assert) {
    // add a new product to local storage
    const newProduct = {
        id: 'P007',
        name: 'Nic Cage',
        image: 'https://www.placecage.com/c/300/300',
        description: 'test',
        category: 'wellness',
        price: 69
    };

    addProduct(newProduct);
    
    // get & parse list from local storage
    let jsonList = localStorage.getItem('PRODUCT-LIST');
    const parsedList = JSON.parse(jsonList);
    
    // determine position of last item from parsed list
    const latestItem = (parsedList.length - 1);

    // define expected & actual
    const expected = newProduct;
    const actual = parsedList[latestItem];

    assert.deepEqual(actual, expected);
});