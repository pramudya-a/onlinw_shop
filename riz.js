let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  updateCart();
}

function updateCart() {
  document.getElementById('cartCount').innerText = cart.length;

  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.product} - Rp${item.price.toLocaleString()}`;
    cartItems.appendChild(li);
  });

  document.getElementById('cartTotal').innerText = `Rp${total.toLocaleString()}`;
}

document.getElementById('cartBtn').addEventListener('click', () => {
  const cartSection = document.getElementById('cart');
  cartSection.classList.toggle('hidden');
});
