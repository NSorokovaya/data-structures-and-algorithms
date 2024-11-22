var addBinary = function (a, b) {
  let saved = 0;
  let result = "";

  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    let digit1 = i >= 0 ? Number(a[i]) : 0;
    let digit2 = j >= 0 ? Number(b[j]) : 0;

    let sum = digit1 + digit2 + saved;

    if (sum > 1) {
      sum = sum % 2;
      saved = 1;
    } else {
      saved = 0;
    }

    result = sum + result;
  }

  if (saved > 0) {
    result = saved + result;
  }
  return result;
};

// check one more time
