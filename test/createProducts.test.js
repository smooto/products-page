// IMPORT MODULES under test here:
import products from '../products/products.js';
import createProducts from '../products/createProduct.js';

const test = QUnit.test;

test('createProducts', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = `<li class="product wellness"><img src="assets/rose-quartz-water.jpeg"><h3>Rose Quartz Water Bottle</h3><p>$84.00</p><p class="product-desc">This water bottle will infuse your water with the healing power of rose quartz. Remember to stock up on Smoop triple-filtered water (sold separately)!</p><button id="P001">Add to cart</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createProducts(products[0]).outerHTML;

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(actual, expected);
});
