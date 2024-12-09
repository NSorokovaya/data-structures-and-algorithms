var permute = function (nums) {
  let result = [];
  let path = [];

  backtrack(result, path, nums);

  return result;
};

function backtrack(result, path, nums) {
  if (path.length === nums.length) {
    result.push([...path]);
    return;
  }

  for (let num of nums) {
    if (path.includes(num)) continue;
    path.push(num);
    backtrack(result, path, nums);
    path.pop();
  }
}
