// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/515f51d438015969f7000013

function pyramid(n) {
  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: i + 1 }, () => 1)
  );
}

console.log({ "": pyramid(3) });
