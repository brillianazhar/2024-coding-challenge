// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/54dc6f5a224c26032800005c

function stockList(listOfArt, listOfCat) {
  if (listOfArt.length === 0 || listOfCat.length === 0) return "";
  return listOfCat
    .map(
      (c) =>
        `(${c} : ${listOfArt
          .filter((l) => l[0] === c)
          .reduce((a, b) => a + Number(b.split(" ")[1]), 0)})`
    )
    .join(" - ");
}

console.log({
  "": stockList(
    ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],
    ["A", "B", "C", "D"]
  ),
});
