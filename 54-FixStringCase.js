// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5b180e9fedaa564a7000009a

function solve(s) {
  //   const upper = s.match(/([A-Z])/g) ? s.match(/([A-Z])/g).length : 0;
  //   const lower = s.match(/([A-Z])/g) ? s.match(/([a-z])/g).length : 0;
  //   return upper > lower ? s.toUpperCase() : s.toLowerCase();

  // Cara lain
  return s.replace(/[A-Z]/g, "").length < s.length / 2
    ? s.toUpperCase()
    : s.toLowerCase();
}

console.log(solve("Code"));
