// iterative approach O(log n)

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function binarySearch(array, target) {
  // in case array was unsorted
  //   array.sort((a, b) => a - b);

  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch(array, 6));

//recursive apporoach

function recursiveBinarySearch(
  array,
  target,
  left = 0,
  right = array.length - 1
) {
  let mid = Math.floor((left + right) / 2);

  if (array[mid] === target) {
    return mid;
  } else if (array[mid] < target) {
    return recursiveBinarySearch(array, target, (left = mid + 1), right);
  } else {
    return recursiveBinarySearch(array, target, left, (right = mid - 1));
  }
}

console.log(recursiveBinarySearch(array, 6));
