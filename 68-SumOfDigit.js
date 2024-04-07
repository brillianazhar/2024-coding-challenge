// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/541c8630095125aba6000c00

function digitalRoot(n) {
  const result = n
    .toString()
    .split("")
    .reduce((a, b) => Number(a) + Number(b), 0);
  return result >= 10 ? digitalRoot(result) : result;

  // Cara lain
  //   return ((n - 1) % 9) + 1;
}

console.log({ "": digitalRoot(224397) });
