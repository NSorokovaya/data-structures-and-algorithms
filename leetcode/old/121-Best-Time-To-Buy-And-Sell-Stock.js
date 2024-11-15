let prices = [3, 2, 6, 5, 0, 3];

// var maxProfit = function (prices) {
//   let lowestPrice = Math.min(...prices);
//   let lowestPriceIndex = prices.indexOf(lowestPrice);
//   if (lowestPriceIndex === prices.length - 1) {
//     prices.pop();
//     lowestPrice = Math.min(...prices);
//     lowestPriceIndex = prices.indexOf(lowestPrice);
//   }
//   console.log("lowestPrice", lowestPrice);
//   let getDifferentDay = [];
//   for (let i = lowestPriceIndex + 1; i < prices.length; i++) {
//     if (i > lowestPriceIndex) {
//       getDifferentDay.push(prices[i]);
//     } else {
//       lowestPrice = prices[i];
//       lowestPriceIndex = i;
//     }
//   }
//   console.log("getDifferentDay", getDifferentDay);

//   if (getDifferentDay.length > 0 && prices.length > 1) {
//     const highestPice = Math.max(...getDifferentDay);
//     console.log("highestPice", highestPice);

//     return highestPice - lowestPrice;
//   } else return 0;
// };

var maxProfit = function (prices) {
  if (prices.length <= 1) {
    return 0;
  }

  let minPrice = prices[0];
  let maxProfitValue = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > minPrice) {
      const profit = prices[i] - minPrice;
      if (profit > maxProfitValue) {
        maxProfitValue = profit;
      }
    } else {
      minPrice = prices[i];
    }
  }

  return maxProfitValue;
};

console.log(maxProfit(prices));
