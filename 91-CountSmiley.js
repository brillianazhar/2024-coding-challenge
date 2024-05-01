// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/583203e6eb35d7980400002a

function countSmileys(arr) {
  let count = 0;
  const eyes = [":", ";"];
  const nose = ["-", "~"];
  const mouth = [")", "D"];
  arr.map((item) => {
    if (item.length === 2) {
      eyes.includes(item[0]) && mouth.includes(item[1]) ? count++ : false;
    } else {
      eyes.includes(item[0]) &&
      mouth.includes(item[2]) &&
      nose.includes(item[1])
        ? count++
        : false;
    }
  });
  return count;

  //Cara lain
  //   return arr.filter((item) => /^[:;][-~]?[)D]$/.test(item)).length;
}

console.log({ "": countSmileys([":-)", ";~D", ":-D", ":_D"]) });
