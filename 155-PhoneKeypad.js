// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/54a2e93b22d236498400134b

function presses(phrase) {
  const list = [
    "1",
    "ABC2",
    "DEF3",
    "GHI4",
    "JKL5",
    "MNO6",
    "PQRS7",
    "TUV8",
    "WXYZ9",
    "*",
    " 0",
    "#",
  ];

  return [...phrase.toUpperCase()].reduce(
    (a, b) => a + list.reduce((c, d) => c + d.indexOf(b) + 1, 0),
    0
  );
}

console.log({ "": presses("# *") });
