// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/53697be005f803751e0015aa

let vowel = ["a", "e", "i", "o", "u"];

function encode(string) {
  return string
    .split("")
    .map((str) => vowel.indexOf(str) + 1 || str)
    .join("");
}

function decode(string) {
  return string
    .split("")
    .map((str) => vowel[Number(str) - 1] || str)
    .join("");
}

console.log({ "": encode("How are you today?") });

console.log({ "": decode("Th3s 3s 1n 2nc4d3ng t2st.") });
