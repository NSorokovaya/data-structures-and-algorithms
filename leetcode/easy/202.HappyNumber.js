var isHappy = function (n) {
  let seen = new Set();

  function recursion(n) {
    let string = String(n).split("");

    let sum = 0;

    for (let letter of string) {
      sum += Math.pow(Number(letter), 2);
    }

    if (sum === 1) {
      return true;
    }

    if (seen.has(sum)) {
      return false;
    }

    seen.add(sum);

    return recursion(sum);
  }

  return recursion(n);
};

// slow and fast pointers approach

var isHappy = function (n) {
  function convertNumber(n) {
    let string = String(n).split("");

    let sum = 0;

    for (let letter of string) {
      sum += Math.pow(Number(letter), 2);
    }

    return sum;
  }

  let slow = n;
  let fast = convertNumber(n);

  while (fast !== 1 && slow !== fast) {
    slow = convertNumber(slow);
    fast = convertNumber(convertNumber(fast));
  }

  return fast === 1;
};
