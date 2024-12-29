var combinationSum = function (candidates, target) {
  let result = [];
  let path = [];

  backtracking(result, path, candidates, target, 0, 0);

  return result;
};

function backtracking(result, path, candidates, target, sum, startIndex) {
  if (sum === target) {
    result.push([...path]);
    return;
  }

  if (sum > target) return;

  // define a start index to get rid of dublicates

  for (let i = startIndex; i < candidates.length; i++) {
    path.push(candidates[i]);
    backtracking(result, path, candidates, target, sum + candidates[i], i);
    path.pop();
  }
}
