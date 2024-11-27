// using for searching the biggest substring or subarray with some property

function findLongestSubstring(string) {
  let result = 0;
  let left = 0;
  let right = 0;

  let set = new Set();

  while (right < string.length) {
    if (set.has(string[right])) {
      set.delete(string[left]);
      left++;
    } else {
      set.add(string[right]);
      result = Math.max(result, right - left + 1);
      right++;
    }
  }
  return result;
}
