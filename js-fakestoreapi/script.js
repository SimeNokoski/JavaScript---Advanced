
let url = "https://fakestoreapi.com/products";

function setData(key, data) {
  let dataToSave = typeof data == 'object' ? JSON.stringify(data) : data
  sessionStorage.setItem(key, dataToSave);
}

function getData(key) {
  let dataToReturn;
  dataToReturn = sessionStorage.getItem(key);
  try {
    dataToReturn = JSON.parse(dataToReturn)
  }
  catch (e) {
    dataToReturn = dataToReturn;
  };
  return dataToReturn;
}

function getDataFromURLorLocal(url) {
  return new Promise((resolve) => {
    const localData = getData(url);
    if (!localData) {
      fetch(url).then(data => data.json())
        .then(data => {
          setData(url, data)
          resolve(data);
        });
      console.log("Go nema vo sessionStorage")
    }
    else {
      console.log('Zemeno od sessionStorage');
      resolve(localData);
    }
  })
}

function loadProducts() {
  getDataFromURLorLocal(url)
    .then(data => {
      console.log(data)
      allFun(data)
      showProducts(data)
      womenFun(data)
      menFun(data);
      electronicsFun(data)
      jeweleryFun(data)
    })
}
loadProducts()

let all = document.getElementById("all");
const allFun = (products) => {
  all.addEventListener("click", function () {
    let fil = products.filter((x) => x.category)
    allproducts.innerText = ``;
    showProducts(fil)
  })
}

let men = document.getElementById("men");
const menFun = (products) => {
  men.addEventListener("click", function () {
    let fil = products.filter((x) => x.category === `men's clothing`)
    allproducts.innerText = ``;
    showProducts(fil)
  })
}

let women = document.getElementById("women");
const womenFun = (products) => {
  women.addEventListener("click", function () {
    let fil = products.filter((x) => x.category === `women's clothing`)
    allproducts.innerText = ``;
    showProducts(fil)
  })
}

let electronics = document.getElementById("electronics");
const electronicsFun = (products) => {
  electronics.addEventListener("click", function () {
    let fil = products.filter((x) => x.category === `electronics`)
    allproducts.innerText = ``;
    showProducts(fil)
  })
}

let jewelery = document.getElementById("jewelery");
const jeweleryFun = (products) => {
  jewelery.addEventListener("click", function () {
    let fil = products.filter((x) => x.category === `jewelery`)
    allproducts.innerText = ``;
    showProducts(fil)
  })
}

let allproducts = document.getElementById("all-products");
const showProducts = (products) => {
  for (const product of products) {
    // console.log(product)
    const divProduct = document.createElement("div");
    divProduct.innerHTML = `<div id= "cartCon">
    <div class="cartCss">
    <div class = "cartCssImg">
    <img class="product-image" src=${product.image}></img>
    </div>
    <div  class = "cartCssDiv">
      <h2 class = "cartCssText"> ${product.id}</h1>
      <h4  class = "cartCssText">${product.title}</h4>
      <p  class = "cartCssText">Category: ${product.category}</p>
      <p>${product.description}</p>
      <p  class = "cartCssText">Rating: <span>${product.rating.rate}</span></P>
      <h2  class = "cartCssText">Price: $${product.price}</h2>
      <button  class = "cartCssText addBtnCart" onclick="addToCart(${product.id},${product.price} )">add to cart</button>
      </div></div></div>
      `;
    allproducts.appendChild(divProduct);
  }
};

let count = 0;
let totalProduct = document.getElementById("total-Products");
const addToCart = (id, price) => {
  count += 1;
  updatePrice("price", price);
  totalProduct.innerText = count;
  const product_ID = document.getElementById("product_ID");
  product_ID.innerHTML += `<div class= "divCartInfo" id = "${id}"><div>Product-ID: ${id}   Price: ${price}$</div><div> 
  <button class="btnDell " onclick = "dell(${id},${price})">Dell</button></div></div>`
  // localStorage.setItem("product_ID",product_ID.innerHTML)
};

const dell = (id, price1) => {
  const divCartInfo = document.getElementsByClassName("divCartInfo");
  totalProduct.innerText = divCartInfo.length - 1;
  count = divCartInfo.length - 1;
  let dellbtn = document.getElementById(`${id}`);
  dellbtn.remove();
  let delSum = parseFloat(price.textContent)
  price.innerHTML = (delSum - price1).toFixed(2);
}

const updatePrice = (id, value) => {
  const element = document.getElementById(id).innerText;
  const converted = parseFloat(element);
  const convertPrice = parseFloat(value);
  const total = converted + convertPrice;
  document.getElementById(id).innerText = total.toFixed(2);
};

const shop = document.getElementById("shop");
const shopImg = document.getElementById("shopImg");
shop.style.display = `none`;
shopImg.addEventListener("click", function () {
  shop.style.display = `block`;
})

const close = document.getElementById("close");
close.addEventListener("click", function () {
  shop.style.display = `none`;
})

const buy = document.getElementById("buy");
buy.addEventListener("click", function () {
  // localStorage.removeItem("product_ID",product_ID)
  let priceToNum = Number(price.textContent)
  if (priceToNum > 0) {
    alert(`Successful payment, Thank you`);
  }
  else {
    alert(`No products added`)
  }
  price.innerText = 0;
  product_ID.innerText = ``;
  totalProduct.innerText = 0;
  count = 0;
})
localStorage.clear()



