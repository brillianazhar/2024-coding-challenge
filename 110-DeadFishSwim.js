// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/51e0007c1f9378fa810002a9

function parse(data) {
  let result = [];
  let res = 0;
  data.split("").map((a) => {
    if (a === "i") return res++;
    if (a === "d") return res--;
    if (a === "s") return (res = res ** 2);
    if (a === "o") return result.push(res);
  });
  return result;
}

console.log({ "": parse("iiisxxxdoso") });
