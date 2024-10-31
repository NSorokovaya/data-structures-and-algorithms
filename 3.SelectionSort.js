const array = [4, 8, 1, 3, 9, 5, 3];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let smallestIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallestIndex]) {
        smallestIndex = j;
      }
    }

    let temp = array[i];
    array[i] = array[smallestIndex];
    array[smallestIndex] = temp;
  }
  return array;
}
console.log(selectionSort(array));

//O(n^2)
