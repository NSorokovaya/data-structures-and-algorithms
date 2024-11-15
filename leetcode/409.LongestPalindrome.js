var longestPalindrome = function (s) {
  const letters = s.split("");
  let map = new Map();

  for (let letter of letters) {
    if (!map.get(letter)) {
      map.set(letter, 1);
    } else {
      map.set(letter, map.get(letter) + 1);
    }
  }

  let withoutPair = "";
  let left = [];

  for (let [letter, count] of map) {
    if (count % 2 === 0) {
      left.push(letter.repeat(count / 2));
    } else if ((count - 1) % 2 === 0 && count % 2 !== 0) {
      left.push(letter.repeat(Math.floor(count / 2)));
      withoutPair = letter;
    }
  }

  const result = [...left, withoutPair, ...left.reverse()].join("");
  return result.length;
};
