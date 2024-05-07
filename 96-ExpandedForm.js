// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5842df8ccbd22792a4000245

function expandedForm(num) {
  return [...`${num}`]
    .map((n, i) => n + "0".repeat([...`${num}`].length - 1 - i))
    .filter((n) => n != 0)
    .join(" + ");
}

console.log({ "": expandedForm(70304) });
