// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/526c7363236867513f0005ca

// Rules leap years :
// - Years divisible by 4 are leap years,
// - but years divisible by 100 are not leap years,
// - but years divisible by 400 are leap years.

function isLeapYear(year) {
  //   return year % 400 === 0
  //     ? true
  //     : year % 100 === 0
  //     ? false
  //     : year % 4 === 0
  //     ? true
  //     : false;

  // Cara lain
  return (year % 4 == 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log({ "": isLeapYear(2015) });
