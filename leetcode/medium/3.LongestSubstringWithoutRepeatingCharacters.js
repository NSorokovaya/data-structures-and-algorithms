var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let right = 0;
  let result = 0;

  let set = new Set();

  while (right < s.length) {
    if (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    } else {
      set.add(s[right]);
      right++;
      result = Math.max(result, set.size);
    }
  }
  return result;
};
