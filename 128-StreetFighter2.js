// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5853213063adbd1b9b0000be

function streetFighterSelection(fighters, position, moves) {
  let result = [];

  moves.forEach(function (move) {
    if (move === "up") {
      position[0] = 0;
    } else if (move === "down") {
      position[0] = 1;
    } else if (move === "right") {
      position[1] = position[1] === 5 ? 0 : position[1] + 1;
    } else if (move === "left") {
      position[1] = position[1] === 0 ? 5 : position[1] - 1;
    }

    result.push(fighters[position[0]][position[1]]);
  });

  return result;
}

console.log({
  "": streetFighterSelection(
    (fightersList = [
      ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
      ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"],
    ]),
    [0, 0],
    [
      "right",
      "down",
      "right",
      "down",
      "left",
      "right",
      "right",
      "right",
      "up",
      "right",
      "right",
      "up",
      "left",
      "left",
      "right",
      "up",
      "left",
      "up",
      "left",
      "left",
      "up",
      "left",
      "left",
      "down",
      "down",
      "right",
      "down",
      "right",
      "up",
      "left",
    ]
  ),
});
