// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5b39e3772ae7545f650000fc

function removeDuplicateWords(s) {
  return [...new Set(s.split(" "))].join(" ");
  //   return Array.from(new Set(s.split(" "))).join(" ");
}

console.log({
  "": removeDuplicateWords(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  ),
});
