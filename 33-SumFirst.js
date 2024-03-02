// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/555eded1ad94b00403000071

function SeriesSum(n) {
  // Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

  return n
    ? Array(n)
        .fill()
        .map((_, i) => 1 / (3 * i + 1))
        .reduce((a, b) => a + b)
        .toFixed(2)
    : "0.00";
}

console.log(SeriesSum(3));
