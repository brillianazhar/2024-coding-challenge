// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

const descendingOrder = n => Number(`${n}`.split('').reverse().map(num => Number(num)).sort( (a,b) => b-a).join(""))

console.log(descendingOrder(123))