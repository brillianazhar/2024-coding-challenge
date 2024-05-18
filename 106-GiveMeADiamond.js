// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5503013e34137eeeaa001648

function diamond(n) {
  if (n % 2 === 0 || n <= 0) return null;

  let result = [];

  //   for (let i = 0; i < n; i++) {
  //     result.push(
  //       " ".repeat(
  //         i <= Math.floor(n / 2) ? Math.floor(n / 2) - i : i - Math.floor(n / 2)
  //       ) +
  //         "*".repeat(
  //           i <= Math.floor(n / 2) ? i * 2 + 1 : n - 2 * (i - Math.floor(n / 2))
  //         ) +
  //         "\n"
  //     );
  //   }

  //Cara lain
  for (let i = 0; i < n; i++) {
    let len = Math.abs((5 - 2 * i - 1) / 2);
    result.push(" ".repeat(len) + "*".repeat(n - 2 * len) + "\n");
  }

  return result.join("");
}

console.log({ "": diamond(5) });
