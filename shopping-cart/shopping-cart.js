// import data
import products from '../products/products.js'; // product db
import cart from '../data/cart.js'; // current cart

// import functions
import renderCart from './renderCart.js';
import { calcOrderItem } from '../common/utils.js';

renderCart(cart, products);