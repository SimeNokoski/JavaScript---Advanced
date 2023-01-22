
let div = document.getElementById("div");
let btn = document.getElementById("btn");
let next10 = document.getElementById("next10");
let previous10 = document.getElementById("previous10");

next10.style.display = `none`;
previous10.style.display = `none`;

let url = " https://swapi.dev/api/planets/?page=1";
let url1 = "https://swapi.dev/api/planets/?page=2";

function table(serverDate) {
  let rez = "<table>";
  rez += "<tr><th>Planet Name</th><th>Population</th><th>Climate</th><th>Gravity</th></tr>";
  for (let i = 0; i < serverDate.results.length; i++) {
    const data = serverDate.results[i];
    rez += `<tr><td>${data.name}</td>
    <td>${data.population}</td>
    <td>${data.climate}</td>
    <td>${data.gravity}</td></tr>`;
  }
  rez += "</table>";
  div.innerHTML = rez;
}

function myFun(url) {
  fetch(url)
    .then(response => {
      response.json()
        .then(serverDate => {
          console.log(serverDate)
          table(serverDate);
        })
    })
}

btn.addEventListener("click", function () {
  myFun(url);
  next10.style.display = `block`;
  btn.style.display = `none`;
})

next10.addEventListener("click", function () {
  myFun(url1);
  next10.style.display = `none`;
  previous10.style.display = `block`;
})

previous10.addEventListener("click", function () {
  myFun(url);
  previous10.style.display = `none`;
  next10.style.display = `block`;
})