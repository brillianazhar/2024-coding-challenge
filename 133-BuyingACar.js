// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/554a44516729e4d80b000012

function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  let moneySaved = 0;
  let months = 0;

  while (startPriceNew > startPriceOld + moneySaved) {
    moneySaved += savingperMonth;
    startPriceNew -= (startPriceNew * percentLossByMonth) / 100;
    startPriceOld -= (startPriceOld * percentLossByMonth) / 100;
    months++;
    if (months % 2 === 1) {
      percentLossByMonth += 0.5;
    }
  }

  return [months, Math.round(moneySaved + startPriceOld - startPriceNew)];
}

console.log({ "": nbMonths(2000, 8000, 1000, 1.5) });
