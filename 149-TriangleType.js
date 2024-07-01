// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/53907ac3cd51b69f790006c5

function triangleType(a, b, c) {
  if (!(a + b > c && a + c > b && b + c > a)) return 0;
  const number = [a, b, c].sort((a, b) => b - a);
  const newC = number[0];
  const newAB = number.slice(1, number.length).reduce((a, b) => a + b ** 2, 0);
  if (newAB > newC ** 2) {
    return 1;
  } else if (newAB === newC ** 2) {
    return 2;
  } else if (newAB < newC ** 2) {
    return 3;
  }
}

console.log({ "": triangleType(3, 3, 1) });
