// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5878520d52628a092f0002d0

function stringTransformer(str) {
  return str
    .split(" ")
    .map((s) =>
      [...s]
        .map((st) =>
          st === st.toLowerCase() ? st.toUpperCase() : st.toLowerCase()
        )
        .join("")
    )
    .reverse()
    .join(" ");
}

console.log({ "": stringTransformer("Example Input") });
