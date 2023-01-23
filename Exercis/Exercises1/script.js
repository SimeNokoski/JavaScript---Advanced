
function digits(num){
    let number = parseInt(num);
    return number >=0 ? number.toString().length :  number.toString().length-1;
}

function evenOrOdd(num){
    return num === 0 ? 0 : num%2===0 ? `Even` : `Odd`; 
}

function posOrNeg(num){
    return num === 0 ? 0 : num>0 ? `Positive ` : `Negative`;
} 

function end(num) {
return `Number ${num}: Digits: ${digits(num)} ${evenOrOdd(num)} ${posOrNeg(num)}  `

}
console.log(end(12345));
console.log(end(-123456));
console.log(end(0));
