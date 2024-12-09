var subsets = function (nums) {
  let result = [];
  let path = [];

  backtrack(result, path, nums, 0);

  return result;
};

function backtrack(result, path, nums, start) {
  result.push([...path]);

  for (let i = start; i < nums.length; i++) {
    path.push(nums[i]);
    backtrack(result, path, nums, i + 1);
    path.pop();
  }
}
