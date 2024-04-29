// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(nFloors) {
  //   let result = [];
  //   for (let i = 0; i < nFloors; i++) {
  //     let floor = "";
  //     for (let j = 0; j < nFloors * 2 - 1; j++) {
  //       if (
  //         j <= Math.floor((nFloors * 2 - 1) / 2) + i &&
  //         j >= Math.floor((nFloors * 2 - 1) / 2) - i
  //       ) {
  //         floor += "*";
  //       } else {
  //         floor += "\xa0";
  //       }
  //     }
  //     result.push(floor);
  //   }
  //   return result;

  // Cara lain
  return [...Array(nFloors)].map(
    (_, i) =>
      " ".repeat(nFloors - 1 - i) +
      "*".repeat(i * 2 + 1) +
      " ".repeat(nFloors - 1 - i)
  );
}

console.log({ "": towerBuilder(5) });
