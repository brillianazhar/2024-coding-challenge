// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/58663693b359c4a6560001d6

function mazeRunner(maze, directions) {
  let currentX = 0;
  let currentY = 0;

  for (var i = 0; i < maze.length; i++) {
    for (var j = 0; j < maze[i].length; j++) {
      if (maze[i][j] == 2) {
        currentX = j;
        currentY = i;
      }
    }
  }

  for (let i = 0; i <= directions.length; i++) {
    if (directions[i] == "N") currentY--;
    if (directions[i] == "E") currentX++;
    if (directions[i] == "S") currentY++;
    if (directions[i] == "W") currentX--;

    if (!maze[currentY]) return "Dead";
    if (maze[currentY][currentX] === 3) return "Finish";
    if (
      maze[currentY][currentX] === undefined ||
      maze[currentY][currentX] === 1
    )
      return "Dead";
  }

  return "Lost";
}

console.log({
  "": mazeRunner(
    [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 3],
      [1, 0, 1, 0, 1, 0, 1],
      [0, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 2, 1, 0, 1, 0, 1],
    ],
    ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"]
  ),
});
