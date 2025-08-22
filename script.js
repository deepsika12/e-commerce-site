const products = [
  {
    id: 1,
    name: "Red T-Shirt",
    price: 19.99,
    image: "https://via.placeholder.com/200x150?text=Red+T-Shirt"
  },
  {
    id: 2,
    name: "Blue Hoodie",
    price: 29.99,
    image: "https://via.placeholder.com/200x150?text=Blue+Hoodie"
  },
  {
    id: 3,
    name: "Green Jacket",
    price: 39.99,
    image: "https://via.placeholder.com/200x150?text=Green+Jacket"
  }
];

let cart = [];

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    updateCartCount();
    alert(`${product.name} added to cart.`);
  }
}

function renderProducts() {
  const container = document.getElementById("product-list");
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

renderProducts();
updateCartCount();
