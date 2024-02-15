// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5412509bd436bd33920011bc

function maskify(cc) {
  return [...cc].map((a, i) => (i < [...cc].length - 4 ? "#" : a)).join("");

  // Cara 2
  // return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

console.log(maskify("4556364607935616"));
