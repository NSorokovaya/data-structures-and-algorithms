// Backtracking explores all possible solutions and backtracks when a solution path fails.

// Use this pattern when you need to find all (or some) solutions to a problem that satisfies given constraints.
//For example: combinatorial problems, such as generating permutations, combinations, or subsets.

// 1. Use recursion to generate permutations.

// 2. For each element, include it in the current permutation and recursively generate the remaining permutations.

// 3. Backtrack when all permutations for a given path are generated.

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
