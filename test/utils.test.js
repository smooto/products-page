import products from '../products/products.js';
import { findById } from '../common/utils.js';

const test = QUnit.test;

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