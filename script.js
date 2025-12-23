const productList = document.getElementById("productList");

fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(data => {
    data.products.forEach(product => {
      productList.innerHTML += `
        <div class="col-md-3">
          <div class="product-card">
            <img src="${product.thumbnail}" class="img-fluid mb-2">
            <h6>${product.title}</h6>
            <p class="small">${product.description.substring(0, 50)}...</p>
            <strong>₹ ${product.price}</strong>
            <br>
            <button class="btn btn-sm btn-outline-primary mt-2"
              onclick="viewProduct(${product.id})">
              View
            </button>
          </div>
        </div>
      `;
    });
  });

function viewProduct(id) {
  window.location.href = `view.html?id=${id}`;
}
