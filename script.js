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

function displayProduct(arr) {
    let cartoona = ``;
    for (let i = 0; i < arr.length; i++) {
      cartoona += `<div class="col-3">
                  <div class="card shadow bg-newLight border-2 border-blue mt-2 p-3">
                      <img class="img-fluid" src=" ${arr[i].image}" alt="Mobile Phone">
                      <h6 class="text-dark">Code: ${arr[i].code}</h6>
                      <h6 class="text-dark">Name: ${arr[i].Name}</h6>
                      <h6 class="text-dark">Price: ${arr[i].price}</h6>
                      <h6 class="text-dark">Condition: ${arr[i].condition}</h6>
                      <div class="d-flex gap-2">
                          <button onclick="editProduct(${i})" class="btn btn-outline-warning w-50">Edit <i class="bi bi-pencil"></i></button>
                          <button onclick="deleteProduct(${i})" class="btn btn-outline-danger w-50">Delete <i class="bi bi-trash"></i></button>                        
                          </div>
                          </div>
              </div>`;
    }
    productList.innerHTML = cartoona;
  }
  