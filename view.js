const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

fetch(`https://dummyjson.com/products/${productId}`)
  .then(res => res.json())
  .then(product => {
    document.getElementById("productImage").src = product.thumbnail;
    document.getElementById("productTitle").innerText = product.title;
    document.getElementById("productDescription").innerText = product.description;
    document.getElementById("productPrice").innerText = "₹ " + product.price;
  });
