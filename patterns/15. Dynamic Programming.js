var coinChange = function (coins, amount) {
  let storage = [];

  if (amount < 1) return 0;

  storage[0] = 0;

  for (let i = 1; i <= amount; i++) {
    storage[i] = amount + 1;

    for (let coin of coins) {
      if (coin <= i) {
        storage[i] = Math.min(storage[i], storage[i - coin] + 1);
      }
    }
  }

  return storage[amount] > amount ? -1 : storage[amount];
};
