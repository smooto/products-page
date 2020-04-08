import products from '../products/products.js';
import cart from '../data/cart.js';
import { findById, calcLineItem, calcOrderItem } from '../common/utils.js';

const test = QUnit.test;

///////////// findById tests

test('findById - Rose Quartz Bottle', function(assert) {
    ////// target product
    const id = 'P001';
    
    ////// test A: pull from db
    const expectedA = products[0];
    const actualA = findById(products, id);

    assert.equal(actualA, expectedA);

    ////// test B: pull from cart
    const expectedB = cart[0];
    const actualB = findById(cart, id);

    assert.equal(actualB, expectedB);
});

test('findById - Smoop Artesianal Water', function(assert) {
    ////// target product
    const id = 'P006';
    
    ////// test A: pull from db
    const expectedA = products[5];
    const actualA = findById(products, id);

    assert.equal(actualA, expectedA);

    ////// test B: pull from cart
    const expectedB = cart[1];
    const actualB = findById(cart, id);

    assert.equal(actualB, expectedB);
});

///////////// calcLineItem tests

test('calcLineItem - Rose Quartz Bottle', function(assert) {
    // array element to be tested
    const element = products[0];
    
    // parameters
    const quantity = 1;
    const price = element.price;

    // expected output
    const expected = 84;

    // function call    
    const actual = calcLineItem(quantity, price);

    // assert
    assert.equal(actual, expected);
});

test('calcLineItem - Smoop Artesianal Water', function(assert) {
    // array element to be tested
    const element = products[5];
    
    // parameters
    const quantity = 3;
    const price = element.price;

    // expected output
    const expected = 30;

    // function call    
    const actual = calcLineItem(quantity, price);

    // assert
    assert.equal(actual, expected);
});

///////////// calcOrderItem tests

test('calcOrderItem test', function(assert) {
    // dummy cart for testing
    const testCart = [
        { id: 'P001', quantity: 1 },
        { id: 'P006', quantity: 3 }
    ];
    
    // expected output
    const expected = 114;

    // function call    
    const actual = calcOrderItem(testCart, products);

    // assert
    assert.equal(actual, expected);
});
