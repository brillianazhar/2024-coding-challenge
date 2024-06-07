// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2

// Using Luhn Algorithm
function validate(n) {
  return (
    [...`${n}`]
      .map((a, i) => {
        let double =
          [...`${n}`].length % 2
            ? i % 2
              ? Number(a) * 2
              : Number(a)
            : i % 2
            ? Number(a)
            : Number(a) * 2;
        return double > 9 ? double - 9 : double;
      })
      .reduce((a, b) => a + b) %
      10 ===
    0
  );
}

console.log({ "": validate(891) });
