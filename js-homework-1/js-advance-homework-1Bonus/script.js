
let btn = document.getElementById("btn");
let div1 = document.getElementById("div1");
let names = document.getElementById("names")
let h1 = document.getElementById("h1");

fetch("https://swapi.dev/api/people")
    .then(response => {
        response.json()
            .then(serverData => {
                console.log(serverData)
                let rez = [];

                for (let i = 0; i < serverData.results.length; i++) {

                    names.innerHTML += `<option>${serverData.results[i].name}</option>`;
                    rez.push(`<th>Height</th><th>Mass</th><th>Eye color</th><th>Hair color</th><tr><td>  ${serverData.results[i].height}</td> 
                    <td> ${serverData.results[i].mass}</td>
                     <td>  ${serverData.results[i].eye_color}</td> 
                      <td>  ${serverData.results[i].hair_color}</td></tr>`);
                }
                let option = names.children;
                btn.addEventListener("click", function () {
                    h1.innerHTML = `<h1>${names.value}</h1>`

                    for (let i = 0; i < option.length; i++) {

                        if (option[i].textContent === names.value) {

                            div1.innerHTML = `<table>${rez[i]}</table>`;
                        }
                    }
                })
            })
    })








