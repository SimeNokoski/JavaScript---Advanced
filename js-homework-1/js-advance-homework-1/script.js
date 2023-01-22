
let btn = document.getElementById("btn");
let div2 = document.getElementById("div2");
let div1 = document.getElementById("div1");

btn.addEventListener("click", function () {
    fetch("https://swapi.dev/api/people/1")
        .then(response => {
            response.json()
                .then(serverData => {
                    console.log(serverData)
                    let h1 = document.createElement("h1");
                    let name = serverData.name;
                    h1.append(name);
                    div1.appendChild(h1);

                    div2.innerHTML = `<table><th>Height</th><th>Mass</th><th>Eye color</th><th>Hair color</th><tr><td>  ${serverData.height}</td>
                    <td>${serverData.mass}</td>
                    <td> ${serverData.eye_color}</td>
                    <td> ${serverData.hair_color}</td></tr>`
                })
        })
})







