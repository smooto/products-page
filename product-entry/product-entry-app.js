// get form element and submit button from DOM
const newProductForm = document.getElementById('new-product-form');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('submit', (e) => {
    e.preventDefault();
    const newProductData = new FormData(newProductForm);

    
});