// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/59df2f8f08c6cec835000012

function meeting(s) {
  return s
    .split(";")
    .map((s) => `(${s.toUpperCase().split(":").reverse().join(", ")})`)
    .sort()
    .join("");
}

console.log({
  "": meeting(
    "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
  ),
});
