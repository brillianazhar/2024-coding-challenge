// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/529eef7a9194e0cbc1000255

const isAnagram = (test, original) => {
  //   if (test.length !== original.length) return false;
  //   return original
  //     .toLowerCase()
  //     .split("")
  //     .sort()
  //     .filter((char, i) => char === test.toLowerCase().split("").sort()[i])
  //     .length === test.length
  //     ? true
  //     : false;

  // Cara lain
  return (
    test.toLowerCase().split("").sort().join("") ===
    original.toLowerCase().split("").sort().join("")
  );
};

console.log(isAnagram("foefet", "toffee"));
