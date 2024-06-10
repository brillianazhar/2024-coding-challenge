// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/58223370aef9fc03fd000071

function dashatize(num) {
  return (num = num
    .toString()
    .split("")
    .map(function (n) {
      return n % 2 ? `-${n}-` : n;
    }))
    .join("")
    .split("-")
    .filter((a) => a != "")
    .join("-");
}

console.log({ "": dashatize(97302) });
