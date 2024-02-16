// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/558fc85d8fd1938afb000014

function sumTwoSmallestNumbers(numbers) {
  const sorted = numbers.sort((a, b) => a - b);
  return sorted[0] + sorted[1];

  // Cara 2
  // return numbers.sort((a,b) => a-b).slice(0,2).reduce((a,b) => a+b);
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
