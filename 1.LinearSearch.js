//O(n)

const array = [4, 8, 1, 3, 9, 5, 3];
const target = 9;

function linearSearch() {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(target));
