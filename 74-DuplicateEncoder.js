// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word) {
  //   const result = [];
  //   for (const w of word) {
  //     word
  //       .toLowerCase()
  //       .split("")
  //       .filter((c) => w.toLowerCase() === c).length > 1
  //       ? result.push(")")
  //       : result.push("(");
  //   }
  //   return result.join("");

  return word
    .toLowerCase()
    .split("")
    .map((w, i, words) =>
      words.indexOf(w) === words.lastIndexOf(w) ? "(" : ")"
    )
    .join("");
}

console.log({ "": duplicateEncode("Success") });
