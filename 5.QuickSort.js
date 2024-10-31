// O(log2n * n)

const array = [4, 8, 1, 3, 9, 5, 3];

function quickSort(array) {
  let less = [];
  let greater = [];
  let mid = Math.floor(array.length / 2);

  if (array.length <= 1) {
    return array;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[mid]) continue;
    if (array[i] < array[mid]) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return [...quickSort(less), array[mid], ...quickSort(greater)];
}

console.log(quickSort(array));
