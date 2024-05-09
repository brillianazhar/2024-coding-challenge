// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5544c7a5cb454edb3c000047

function bouncingBall(h, bounce, window) {
  if (bounce >= 1 || bounce <= 0 || h <= 0 || window >= h) return -1;
  let result = 1;
  while (h * bounce > window) {
    h = h * bounce;
    result += 2;
  }
  return result;
}

console.log({ "": bouncingBall(3, 6, 1.5) });
