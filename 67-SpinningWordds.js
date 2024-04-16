// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(string) {
  return string
    .split(" ")
    .map((str) => (str.length >= 5 ? str.split("").reverse().join("") : str))
    .join(" ");
}

console.log({ "": spinWords("This is another second test") });
