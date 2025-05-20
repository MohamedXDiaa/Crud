let productCode = document.getElementById("productCode");
let productName = document.getElementById("productName");
let productPrice = document.getElementById("productPrice");
let productCondition = document.getElementById("productCondition");
let addBtn = document.getElementById("btnAdd");
let editBtn = document.getElementById("btnEdit");
let productList = document.getElementById("productList");
let searchInput = document.getElementById("searchInput");
let productImage = document.getElementById("imageInput");

let productContainer = [];
if (localStorage.getItem("product") !== null) {
  productContainer = JSON.parse(localStorage.getItem("product"));
  displayProduct(productContainer);
}

function addProduct() {
    let product = {
      code: productCode.value,
      Name: productName.value,
      price: productPrice.value,
      condition: productCondition.value,
      image: "",
    };
    let file = productImage.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = function () {
        product.image = reader.result;
        productContainer.push(product);
        localStorage.setItem("product", JSON.stringify(productContainer));
        displayProduct(productContainer);
        clearInputs();
      };
      reader.readAsDataURL(file);
    }
    else {
      product.image = "https://static.vecteezy.com/system/resources/previews/005/720/408/original/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg";
      productContainer.push(product);
      localStorage.setItem("product", JSON.stringify(productContainer));
      displayProduct(productContainer);
      clearInputs();
    }
}
function clearInputs() {
    productCode.value = "";
    productName.value = "";
    productPrice.value = "";
    productCondition.value = "";
    productImage.value = "";
  }
  