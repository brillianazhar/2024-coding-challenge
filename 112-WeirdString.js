// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/52b757663a95b11b3d00062d

function toWeirdCase(string) {
  return string
    .split(" ")
    .map((strs, i) =>
      [...strs]
        .map((s, a) => {
          return a % 2 === 0 ? s.toUpperCase() : s.toLowerCase();
        })
        .join("")
    )
    .join(" ");
}

console.log({ "": toWeirdCase("This is a test") });
