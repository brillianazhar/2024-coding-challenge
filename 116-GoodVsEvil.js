// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/52761ee4cffbc69732000738

function goodVsEvil(good, evil) {
  const pointGood = [1, 2, 3, 3, 4, 10];
  const pointEvil = [1, 2, 2, 2, 3, 5, 10];
  let totalGood = good
    .split(" ")
    .reduce((a, b, i) => a + Number(b) * pointGood[i], 0);
  let totalEvil = evil
    .split(" ")
    .reduce((a, b, i) => a + Number(b) * pointEvil[i], 0);

  if (totalGood === totalEvil)
    return "Battle Result: No victor on this battle field";
  return totalGood > totalEvil
    ? "Battle Result: Good triumphs over Evil"
    : "Battle Result: Evil eradicates all trace of Good";
}

console.log({ "": goodVsEvil("0 0 0 0 0 10", "0 1 1 1 1 0 0") });
