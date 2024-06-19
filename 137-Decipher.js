// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/581e014b55f2c52bb00000f8

function decipherThis(str) {
  //   return str
  //     .split(" ")
  //     .map((s) => {
  //       let start = String.fromCharCode(Number(s.match(/[0-9]/g).join("")));
  //       let end = "";
  //       if (s.match(/[a-z]/g)) {
  //         s.match(/[a-z]/g).map((st, i) => {
  //           if (i === 0) {
  //             end += s.match(/[a-z]/g)[s.match(/[a-z]/g).length - 1];
  //           } else if (i === s.match(/[a-z]/g).length - 1) {
  //             end += s.match(/[a-z]/g)[0];
  //           } else {
  //             end += st;
  //           }
  //         });
  //       }
  //       return start + end;
  //     })
  //     .join(" ");

  // Cara lain
  return str
    .split(" ")
    .map((s) => {
      return s
        .replace(/^\d+/, (c) => String.fromCharCode(c))
        .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2");
    })
    .join(" ");
}

console.log({
  "": decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o"),
});
