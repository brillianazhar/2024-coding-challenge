// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/564057bc348c7200bd0000ff

function thirt(n) {
  let sequence = [1, 10, 9, 12, 3, 4];
  let current = 0;
  let next = true;

  while (next) {
    let result = [...`${n}`]
      .reverse()
      .map((n, i) => Number(n) * sequence[i % 6])
      .reduce((a, b) => a + b);
    if (result === current) {
      next = false;
    }
    n = result;
    current = result;
  }

  return current;
}

console.log({ "": thirt(1234567) });
