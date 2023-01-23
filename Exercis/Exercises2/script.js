let fontSize = (element, fontsize) => {
    element.style.fontSize = `${fontsize}px`;
    if (fontsize === ``) {
        element.style.fontSize = `${24}px`;
    }
}
let col = (element, color) =>  element.style.color = color;
 
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    let colorVal = document.getElementById("color").value;
    let fontSizeVal = document.getElementById("fontSize").value;
    let h1 = document.getElementById("h1");
    fontSize(h1, fontSizeVal)
    col(h1, colorVal);
})