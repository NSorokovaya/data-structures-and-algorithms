var minWindow = function (s, t) {
  let left = 0;
  let right = 0;
  let minLength = Infinity;
  let minWindow = "";

  const targetMap = new Map();
  for (let char of t) {
    targetMap.set(char, (targetMap.get(char) || 0) + 1);
  }

  const windowMap = new Map();
  let requiredChars = targetMap.size;
  let formedChars = 0;

  while (right < s.length) {
    const rightChar = s[right];
    windowMap.set(rightChar, (windowMap.get(rightChar) || 0) + 1);

    if (
      targetMap.has(rightChar) &&
      windowMap.get(rightChar) === targetMap.get(rightChar)
    ) {
      formedChars++;
    }

    while (formedChars === requiredChars && left <= right) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        minWindow = s.slice(left, right + 1);
      }

      const leftChar = s[left];
      windowMap.set(leftChar, windowMap.get(leftChar) - 1);

      if (
        targetMap.has(leftChar) &&
        windowMap.get(leftChar) < targetMap.get(leftChar)
      ) {
        formedChars--;
      }

      left++;
    }

    right++;
  }

  return minWindow;
};
