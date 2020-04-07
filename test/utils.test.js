import products from '../products/products.js';
import { findById, calcLineItem } from '../common/utils.js';

const test = QUnit.test;

///////////// findById tests

test('findById - Rose Quartz Bottle', function(assert) {
    // expected: db entry for Rose Quartz water bottle (id: 'P001')
    const id = 'P001';
    const expected = products[0];
    
    // actual: result of findById
    const actual = findById(products, id);

    //Assert
    assert.equal(actual, expected);
});

test('findById - Smoop Artesianal Water', function(assert) {
    // expected: db entry for fancy water (id: 'P006')
    const id = 'P006';
    const expected = products[5];
    
    // actual: result of findById
    const actual = findById(products, id);

    //Assert
    assert.equal(actual, expected);
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