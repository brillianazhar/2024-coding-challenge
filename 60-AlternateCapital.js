// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/59cfc000aeb2844d16000075

function capitalize(s) {
  //   return [
  //     [...s].map((char, i) => (i % 2 ? char : char.toUpperCase())).join(""),
  //     [...s].map((char, i) => (i % 2 ? char.toUpperCase() : char)).join(""),
  //   ];
  return [0, 1].map((n) =>
    [...s].map((char, i) => (i % 2 === n ? char.toUpperCase() : char)).join("")
  );
}

console.log({ asd: capitalize("abcdef") });
