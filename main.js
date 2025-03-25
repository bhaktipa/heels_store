// Sample products - Including the product details
const products = [
  { id: 1, name: "Elegant Red Stiletto Heels", price: 79.99, image: "assets/images/heel1.jpg" },
  { id: 2, name: "Classic Black Pumps", price: 59.99, image: "assets/images/heel2.jpg" }
];

// Initialize an empty cart
let cart = [];

// Function to add a product to the cart
function addToCart(productId) {
  // Find the product by ID
  const product = products.find(p => p.id === productId);
  
  if (product) {
    cart.push(product);
    alert(`${product.name} has been added to your cart!`);
    updateCart();  // Update the cart on the cart page
  } else {
    alert("Product not found!");
  }
}

// Function to update the cart display in the cart.html page
function updateCart() {
  const cartItemsDiv = document.getElementById('cart-items');
  const totalPriceDiv = document.getElementById('total-price');
  cartItemsDiv.innerHTML = "";  // Clear current cart items
  let totalPrice = 0;

  // Display each cart item
  cart.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('cart-item');
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <span>${item.name}</span>
      <span>$${item.price}</span>
    `;
    cartItemsDiv.appendChild(itemDiv);
    totalPrice += item.price;
  });

  // Update the total price
  totalPriceDiv.innerText = totalPrice.toFixed(2);
}

// Call updateCart() when the cart page loads
if (document.body.contains(document.getElementById('cart-items'))) {
  updateCart();
}

// Call updateCheckout() when the checkout page loads
if (document.body.contains(document.getElementById('checkout-items'))) {
  updateCheckout();
}

// Function to handle the checkout page display
function updateCheckout() {
  const checkoutItemsDiv = document.getElementById('checkout-items');
  const totalPriceDiv = document.getElementById('total-price-checkout');
  checkoutItemsDiv.innerHTML = "";  // Clear current checkout items
  let totalPrice = 0;

  // Display each cart item in the checkout
  cart.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('checkout-item');
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="checkout-item-img">
      <span>${item.name}</span>
      <span>$${item.price}</span>
    `;
    checkoutItemsDiv.appendChild(itemDiv);
    totalPrice += item.price;
  });

  // Update the total price in checkout
  totalPriceDiv.innerText = totalPrice.toFixed(2);
}

// Proceed to checkout
function proceedToCheckout() {
  window.location.href = "checkout.html";
}
