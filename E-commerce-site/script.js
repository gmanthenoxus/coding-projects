const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    { id: 3, name: 'Product 3', price: 39.99 },
    { id: 4, name: 'Product 4', price: 11.39 }
];

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderCart();
});

function renderProducts() {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productCard);
    });
}

function renderCart() {
    const cartContainer = document.getElementById('cart-container');
    const cartItemsElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('total-price');

    cartItemsElement.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)} 
        <button onclick="removeFromCart(${item.id})">Remove</button>`;
        cartItemsElement.appendChild(cartItem);
    });

    const total = cart.reduce((acc, item) => acc + item.price, 0);
    totalElement.textContent = `$${total.toFixed(2)}`;
}

function addToCart(productId) {
    const productToAdd = products.find(product => product.id === productId);
    if (productToAdd) {
        cart.push({ ...productToAdd });
        renderCart();
    }
}

function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        renderCart();
    }
}
