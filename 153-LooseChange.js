// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5571f712ddf00b54420000ee

function looseChange(cents) {
  //   cents = cents > 0 ? Math.floor(cents) : 0;
  //   let quarters = Math.floor(cents / 25) * 25;
  //   let dimes = Math.floor((cents - quarters) / 10) * 10;
  //   let nickels = Math.floor((cents - quarters - dimes) / 5) * 5;
  //   let pennies = Math.floor(cents - quarters - dimes - nickels);
  //   return {
  //     Nickels: nickels / 5,
  //     Pennies: pennies,
  //     Dimes: dimes / 10,
  //     Quarters: quarters / 25,
  //   };

  // Cara lain
  cents = cents > 0 ? Math.floor(cents) : 0;
  return {
    Nickels: Math.floor(((cents % 25) % 10) / 5),
    Pennies: Math.floor(((cents % 25) % 10) % 5),
    Dimes: Math.floor((cents % 25) / 10),
    Quarters: Math.floor(cents / 25),
  };
}

console.log({ "": looseChange(192) });
