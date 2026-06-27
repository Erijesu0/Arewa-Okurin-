const cartButtons = document.querySelectorAll(".add-to-cart");
const cartCount = document.getElementById("cart-count");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

cartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = {
      name: button.dataset.name,
      price: button.dataset.price,
      image: button.dataset.image,
    };

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    console.log(cart);
  });
});

updateCartCount();
