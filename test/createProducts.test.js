// IMPORT MODULES under test here:
import smoopProductList from '../data/product-db.js';
import createProducts from '../shop/create-product.js';

const test = QUnit.test;

test('createProducts', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = `<li class="product wellness"><img src="../assets/rose-quartz-water.jpeg"><h3>Rose Quartz Water Bottle</h3><p>$84.00</p><p class="product-desc">This water bottle will infuse your water with the healing power of rose quartz. Remember to stock up on Smoop triple-filtered water (sold separately)!</p><select><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select><button id="P001">Add to cart</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createProducts(smoopProductList[0]).outerHTML;

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(actual, expected);
});
