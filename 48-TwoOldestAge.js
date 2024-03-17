// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/511f11d355fe575d2c000001

function twoOldestAges(ages) {
  return ages.sort((a, b) => a - b).slice(ages.length - 2);
}

console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));
