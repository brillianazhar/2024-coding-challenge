// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/57f8ff867a28db569e000c4a

function kebabize(str) {
  //   return str
  //     .match(/[a-z][a-z]+|[a-z]|[a-z][A-Z]+|[A-Z][a-z]+|[A-Z]|^[0-9]+/g)
  //     .map((s) => s.toLowerCase())
  //     .join("-");

  // Cara lain
  return str
    .replace(/([A-Z])/g, "-$1")
    .replace(/[0-9]/g, "")
    .toLowerCase()
    .replace(/^-/, "");
}
console.log({ "": kebabize("MyCamelCaseString") });
