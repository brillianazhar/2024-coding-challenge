// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/55c45be3b2079eccff00010f

function order(words) {
  if (words.length < 1) "";
  return words
    .split(" ")
    .sort((a, b) => a.match(/\d/g) - b.match(/\d/g))
    .join(" ");
}

console.log({ "": order("4of Fo1r pe6ople g3ood th5e the2") });
