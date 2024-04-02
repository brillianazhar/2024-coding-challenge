// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/51675d17e0c1bed195000001

function solution(digits) {
  return Array.from({ length: digits.length - 4 })
    .map((num, i) => Number(digits.slice(i, i + 5)))
    .sort((a, b) => b - a)[0];
}

console.log({ coba: solution("1234567898765") });
