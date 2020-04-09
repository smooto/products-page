import smoopProductList from '../data/product-db';
import cart from '../data/cart.js';
import { findById } from '../common/utils.js';
import renderLineItems from '../shopping-cart/render-line-items.js';

const test = QUnit.test;

test('renderLineItems - Rose Quartz Bottle', function(assert) {
    // target line item: first in cart
    const lineItem = cart[0];
    
    // target product db entry: rose quartz bottle (P001)
    const product = findById(smoopProductList, lineItem.id);

    // output: rendered Outer HTML
    const expected = `<tr><td>Rose Quartz Water Bottle</td><td>1</td><td>$84.00</td></tr>`;

    const dom = renderLineItems(lineItem, product);
    const actual = dom.outerHTML;

    //Assert
    assert.equal(actual, expected);
});

test('renderLineItems - Smoop Artesianal Water', function(assert) {
    // target line item: second in cart
    const lineItem = cart[1];
    
    // target product db entry: rose quartz bottle (P001)
    const product = findById(smoopProductList, lineItem.id);

    // output: rendered Outer HTML
    const expected = `<tr><td>Smoop Artesianal Water</td><td>3</td><td>$30.00</td></tr>`;

    const dom = renderLineItems(lineItem, product);
    const actual = dom.outerHTML;

    //Assert
    assert.equal(actual, expected);
});