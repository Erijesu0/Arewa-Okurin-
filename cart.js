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

const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

dropdownBtn.addEventListener("click", function () {
  dropdownMenu.classList.toggle("show");
});

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuToggle.innerHTML = "✕";
  } else {
    menuToggle.innerHTML = "☰";
  }
});

window.addEventListener("click", function (e) {
  if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove("show");
  }
});

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart-count").textContent = cart.length;
}

updateCartCount();
