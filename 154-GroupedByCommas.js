// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5274e122fc75c0943d000148

function groupByCommas(n) {
  const numList = [...`${n}`];
  return numList
    .reverse()
    .join("")
    .match(/.{1,3}/g)
    .map((num) => [...num].reverse().join(""))
    .reverse()
    .join(",");
}
console.log({ "": 10 });

console.log({ "": groupByCommas(10000) });
