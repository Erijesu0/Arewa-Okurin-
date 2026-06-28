const cartItemsContainer = document.getElementById("cart-items");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {
  cartItemsContainer.innerHTML = "";

  cart.forEach((item, index) => {
    cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">

                <div>
                    <h3>${item.name}</h3>
                    <p>₦${item.price}</p>
                </div>

                <button onclick="removeItem(${index})">
                    Remove
                </button>
            </div>
        `;
  });
}

function removeItem(index) {
  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
}

displayCart();

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart-count").textContent = cart.length;
}

updateCartCount();
