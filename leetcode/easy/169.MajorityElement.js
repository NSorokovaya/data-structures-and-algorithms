var majorityElement = function (nums) {
  let map = new Map();

  let majority = -1;

  for (let number of nums) {
    if (map.has(number)) {
      map.set(number, map.get(number) + 1);
    } else {
      map.set(number, 1);
    }
  }

  for (let [number, count] of map) {
    if (count > Math.floor(nums.length / 2)) {
      majority = number;
      break;
    }
  }
  return majority;
};
