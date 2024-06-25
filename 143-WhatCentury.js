// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/52fb87703c1351ebd200081f

function whatCentury(year) {
  //   let y = String(Math.ceil(Number(year) / 100));
  //   if (Number(y) > 20) {
  //     switch (y[y.length - 1]) {
  //       case "1":
  //         return y + "st";
  //       case "2":
  //         return y + "nd";
  //       case "3":
  //         return y + "rd";
  //       default:
  //         return y + "th";
  //     }
  //   } else {
  //     return y + "th";
  //   }

  // Cara lain
  const century = Math.ceil(year / 100);
  return (
    century +
    (century <= 20 ? "th" : ["th", "st", "nd", "rd"][century % 10] || "th")
  );
}

console.log({ "": whatCentury("1124") });
