// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/546e2562b03326a88e000020/javascript

function squareDigits(num){
    return result = Number([...`${num}`].map(n => n*n).join(''));
    // return parseInt(result);
}

console.log(squareDigits(3212));