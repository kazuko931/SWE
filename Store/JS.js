// This is a function that adds a product to the cart and updates the total price
function addToCart(button) {
    // Get the product name and price from the button's parent element
    var product = button.parentElement;
    var name = product.querySelector("h3").textContent;
    var price = parseFloat(product.querySelector("p").textContent);
  
    // Create a new list item for the cart with the product name and price
    var item = document.createElement("li");
    item.textContent = name + " - $" + price.toFixed(2);
  
    // Append the item to the cart list
    var cart = document.getElementById("cart");
    cart.appendChild(item);
  
    // Update the total price by adding the product price
    var total = document.getElementById("total");
    var current = parseFloat(total.textContent);
    total.textContent = (current + price).toFixed(2);
  
    // Show an alert message that the product was added to the cart
    alert(name + " was added to your cart!");
  }
  