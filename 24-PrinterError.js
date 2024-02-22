// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/56541980fa08ab47a0000040

function printerError(s) {
  return `${s.match(/[n-z]/gi) === null ? 0 : s.match(/[n-z]/gi).length}/${
    s.length
  }`;
}

console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));
