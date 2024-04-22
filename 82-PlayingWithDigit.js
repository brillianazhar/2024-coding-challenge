// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5552101f47fc5178b1000050

function digPow(n, p) {
  const power = [...`${n}`].reduce((a, b, i) => a + Number(b) ** (p + i), 0);
  return power % n ? -1 : power / n;
}

console.log({ "": digPow(46288, 3) });
