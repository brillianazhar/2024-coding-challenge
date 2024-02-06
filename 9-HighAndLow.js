// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/554b4ac871d6813a03000035

const highAndLow = (numbers) => `${Math.max(...(numbers.split(" ").map(num => parseInt(num))))} ${Math.min(...(numbers.split(" ").map(num => parseInt(num))))}`;

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))