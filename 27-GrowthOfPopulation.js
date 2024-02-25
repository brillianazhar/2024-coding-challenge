// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/563b662a59afc2b5120000c6

function nbYear(p0, percent, aug, p) {
  //   p0 = Math.floor(p0 + p0 * (percent / 100) + aug);
  //   return p0 >= p ? 1 : 1 + nbYear(p0, percent, aug, p);

  // Cara lain
  var count = 0;
  while (p0 <= p) {
    p0 = Math.floor(p0 + p0 * (percent / 100) + aug);
    count++;
  }
  return count;
}

console.log(nbYear(1500, 5, 100, 5000));
