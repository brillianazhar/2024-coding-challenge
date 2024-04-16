// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk) {
  let x = 0;
  let y = 0;

  walk.map((move) => {
    if (move === "n") x++;
    if (move === "s") x--;
    if (move === "e") y++;
    if (move === "w") y--;
  });

  return walk.length === 10 && x === 0 && y === 0;
}

console.log({
  "": isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]),
});
