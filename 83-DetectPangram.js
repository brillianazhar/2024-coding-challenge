// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string) {
  return (string.match(/([a-z])(?!.*\1)/g) || []).length === 26;
}

console.log({ "": isPangram("The quick brown fox jumps over the lazy dog.") });
