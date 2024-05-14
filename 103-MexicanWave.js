// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

function wave(str) {
  //   return str
  //     .toLowerCase()
  //     .split("")
  //     .map((char, i) =>
  //       char !== " "
  //         ? str
  //             .toLowerCase()
  //             .split("")
  //             .map((a, index) => (index === i ? char.toUpperCase() : a))
  //             .join("")
  //         : false
  //     )
  //     .filter((a) => a);

  // Cara lain
  return [...str]
    .map(
      (char, i) =>
        str.toLowerCase().slice(0, i) +
        char.toUpperCase() +
        str.toLowerCase().slice(i + 1)
    )
    .filter((c) => c != str.toLowerCase());
}

console.log({ "": wave("Two words") });
