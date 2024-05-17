// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/51b6249c4612257ac0000005

function solution(roman) {
  //   const romanLetter = {
  //     M: 1000,
  //     CM: 900,
  //     D: 500,
  //     CD: 400,
  //     C: 100,
  //     XC: 90,
  //     L: 50,
  //     XL: 40,
  //     X: 10,
  //     IX: 9,
  //     V: 5,
  //     IV: 4,
  //     I: 1,
  //   };
  //   let res = [];
  //   for (let i = 0; i < roman.length; i++) {
  //     if (romanLetter[roman[i] + roman[i + 1]]) {
  //       res.push(romanLetter[roman[i] + roman[i + 1]]);
  //       i++;
  //     } else {
  //       res.push(romanLetter[roman[i]]);
  //     }
  //   }
  //   return res.reduce((a, b) => a + b);

  //Cara lain
  let conversion = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  return roman
    .match(/CM|CD|XC|XL|IX|IV|\w/g)
    .reduce((acc, roman) => acc + conversion[roman], 0);
}

console.log({ "": solution("MMCD") });
