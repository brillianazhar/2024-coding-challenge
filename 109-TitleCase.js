// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5202ef17a402dd033c000009

function titleCase(title, minorWords) {
  if (title === "") return "";
  const minor = minorWords ? minorWords.toLowerCase().split(" ") : "";
  return title
    .split(" ")
    .map((str, i) =>
      i === 0
        ? str[0].toUpperCase() + str.toLowerCase().slice(1)
        : minor.includes(str.toLowerCase())
        ? str.toLowerCase()
        : str[0].toUpperCase() + str.toLowerCase().slice(1)
    )
    .join(" ");
}

console.log({ "": titleCase("THE WIND IN THE WILLOWS", "The In") });
