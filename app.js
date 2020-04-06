// import fruits data
import fruits from './products/products.js';

// get elements from DOM
const container = document.getElementById('fruits-container');

// loop through array, create DOM elements

function createFruits() {
    fruits.forEach(fruit => {
        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');

        // populate html elements based on object values
        h3.textContent = fruit.name;
        p.textContent = fruit.description;

        // append h3 and p to li
        li.classList.add('fruit');
        li.appendChild(h3);
        li.appendChild(p);

        // append li to div
        container.appendChild(li);
    });
}

createFruits();