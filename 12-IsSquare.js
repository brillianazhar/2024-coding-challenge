// Codewars Coding Challenge 2024
//https://www.codewars.com/kata/54c27a33fb7da0db0100040e/javascript

var isSquare = function(n){
    return n===0 ? true : Math.round(Math.sqrt(n))**2 === n ? true : false;
}

// Cara singkat
// return Math.sqrt(n) % 1 === 0;

console.log(isSquare(44))