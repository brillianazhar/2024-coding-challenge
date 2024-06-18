// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/559536379512a64472000053

function playPass(s, n) {
  //   return s
  //     .toLowerCase()
  //     .split(" ")
  //     .map((str) =>
  //       [...str]
  //         .map((st) =>
  //           st.match(/[a-zA-Z]/g)
  //             ? String.fromCharCode(((st.charCodeAt(0) - 97 + n) % 26) + 97)
  //             : st.match(/[0-9]/g)
  //             ? 9 - Number(st)
  //             : st
  //         )
  //         .join("")
  //     )
  //     .join(" ")
  //     .split("")
  //     .map((j, i) => (i % 2 ? j.toLowerCase() : j.toUpperCase()))
  //     .reverse()
  //     .join("");

  // Cara lain
  return s
    .toLowerCase()
    .replace(/[a-z]/g, (char) => {
      return String.fromCharCode(((char.charCodeAt(0) - 97 + n) % 26) + 97);
    })
    .replace(/\d/g, (digit) => {
      return 9 - digit;
    })
    .replace(/(.)(.?)/g, (match, odd, even) => {
      return odd.toUpperCase() + even.toLowerCase();
    })
    .split("")
    .reverse()
    .join("");
}

console.log({
  "": playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2),
});
