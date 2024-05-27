// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991

function revrot(str, sz) {
  if (sz <= 0 || str === "" || sz > str.length) return "";
  return Array.from({ length: Math.min(str.length / sz) }, (a, i) =>
    str.slice(i * sz, (i + 1) * sz)
  )
    .map((a, i) =>
      [...a].reduce((a, b) => a + Number(b), 0) % 2 === 0
        ? [...a].reverse().join("")
        : [...a].map((_, i) => (i === a.length - 1 ? a[0] : a[i + 1])).join("")
    )
    .join("");
}

console.log({ "": revrot("123456987654", 6) });
