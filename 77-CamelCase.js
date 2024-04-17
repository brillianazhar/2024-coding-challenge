// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/517abf86da9663f1d2000003

function toCamelCase(str) {
  //   return str.length < 1
  //     ? ""
  //     : str
  //         .split(/[^a-zA-Z ]/g)
  //         .map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() + w.slice(1) : w))
  //         .join("");

  // Cara lain
  return str.replace(/[^a-zA-Z]\w/gi, (match) => match.charAt(1).toUpperCase());
}

console.log({ "": toCamelCase("The_stealth_warrior") });
