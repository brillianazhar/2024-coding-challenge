// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5aba780a6a176b029800041c

function maxMultiple(divisor, bound) {
  return bound - (bound % divisor);
}

console.log(maxMultiple(3, 10));
