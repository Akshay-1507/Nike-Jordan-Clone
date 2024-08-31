let cart = {};
let totalPrice = 0;

function addToCart(productName, productPrice, imageUrl) {
    if (!cart[productName]) {
        // If product is not in the cart, add it with quantity 1
        cart[productName] = { price: productPrice, quantity: 1, image: imageUrl };
    } else {
        // If product is already in the cart, increase the quantity
        cart[productName].quantity++;
    }
    
    totalPrice += productPrice;
    updateCartUI();
}

function removeFromCart(productName) {
    if (cart[productName]) {
        // Decrease quantity or remove item if quantity is 1
        if (cart[productName].quantity > 1) {
            cart[productName].quantity--;
            totalPrice -= cart[productName].price;
        } else {
            totalPrice -= cart[productName].price;
            delete cart[productName];
        }
        updateCartUI();
    }
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    let cartCount = 0;
    for (const [name, item] of Object.entries(cart)) {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${name}" class="cart-item-image">
            <p>${name}</p>
            <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
            <button onclick="removeFromCart('${name}')">Remove</button>
        `;
        cartItemsContainer.appendChild(itemElement);

        cartCount += item.quantity;
    }

    document.getElementById('cart-count').textContent = cartCount;
    document.getElementById('total-price').textContent = `Total: $${totalPrice.toFixed(2)}`;
}
document.addEventListener('DOMContentLoaded', () => {
    const cartToggle = document.getElementById('cart-toggle');
    const cartSection = document.getElementById('cart');
    const cartClose = document.getElementById('cart-close');

    // Initially hide the cart section
    cartSection.style.display = 'none';

    // Toggle cart visibility when the icon is clicked
    cartToggle.addEventListener('click', () => {
        if (cartSection.style.display === 'none') {
            cartSection.style.display = 'block';
        } else {
            cartSection.style.display = 'none';
        }
    });

    // Close cart section when the cross icon is clicked
    cartClose.addEventListener('click', () => {
        cartSection.style.display = 'none';
    });
});
