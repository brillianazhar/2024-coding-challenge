// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/javascript

function dnaStrand(dna) {
  return [...dna]
    .map((a) => (a === "A" ? "T" : a === "T" ? "A" : a === "C" ? "G" : "C"))
    .join("");
}

console.log(dnaStrand("ATTGC"));
