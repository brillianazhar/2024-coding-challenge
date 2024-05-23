// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

multiplicationTable = function (size) {
  //   return Array.from({ length: size }, (_, i) => i).map((_, iFirst) =>
  //     Array.from({ length: size }).map(
  //       (_, iSecond) => (iFirst + 1) * (iSecond + 1)
  //     )
  //   );

  //Cara lain
  return Array.from({ length: size }, (_, iFirst) =>
    Array.from({ length: size }, (_, iSecond) => (iFirst + 1) * (iSecond + 1))
  );
};

console.log({ "": multiplicationTable(3) });
