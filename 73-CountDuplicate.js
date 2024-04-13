// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text) {
  return [
    ...new Set(
      text
        .toLowerCase()
        .split("")
        .filter((str, i) => text.indexOf(str) != i)
    ),
  ].length;
}

console.log({ "": duplicateCount("aabbcde") });
