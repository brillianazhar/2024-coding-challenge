// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/563f037412e5ada593000114

function calculateYears(principal, interest, tax, desired) {
  if (principal === desired) return 0;
  let years = 0;
  while (principal <= desired) {
    principal += principal * interest * (1 - tax);
    years++;
  }
  return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));
