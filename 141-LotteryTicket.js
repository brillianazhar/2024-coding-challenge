// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/57f625992f4d53c24200070e

function bingo(ticket, win) {
  return ticket.reduce(
    (a, b) => a + [...b[0]].filter((w) => w.charCodeAt(0) === b[1]).length,
    0
  ) >= win
    ? "Winner!"
    : "Loser!";
}

console.log({
  "": bingo(
    [
      ["ABC", 65],
      ["HGR", 74],
      ["BYHT", 74],
    ],
    2
  ),
});
