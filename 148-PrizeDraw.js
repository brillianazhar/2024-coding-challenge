// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5616868c81a0f281e500005c

function rank(st, we, n) {
  if (st === "") return "No participants";
  if (we.length < n) return "Not enough participants";

  return st
    .split(",")
    .map((n, i) => {
      return {
        name: n,
        value:
          ([...n.toLowerCase()].reduce((a, b) => a + b.charCodeAt(0) - 96, 0) +
            n.length) *
          we[i],
      };
    })
    .sort((a, b) => {
      if (a.value === b.value) {
        return a.name.localeCompare(b.name);
      }

      return b.value - a.value;
    })[n - 1].name;
}

console.log({
  "": rank("Lagon,Lily", [1, 5], 2),
});
