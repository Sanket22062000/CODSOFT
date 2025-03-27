let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    document.getElementById("cart-count").innerText = cart.length;
    alert(productName + " added to cart!");
}

function viewCart() {
    let cartModal = document.getElementById("cart-modal");
    let cartItems = document.getElementById("cart-items");
    let totalPrice = document.getElementById("total-price");

    cartItems.innerHTML = "";
    cart.forEach(item => {
        let li = document.createElement("li");
        li.innerText = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });

    totalPrice.innerText = total;
    cartModal.style.display = "block";
}

function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}

function checkout() {
    alert("Thank you for your purchase! Your total is $" + total);
    cart = [];
    total = 0;
    document.getElementById("cart-count").innerText = "0";
    closeCart();
}