var canConstruct = function (ransomNote, magazine) {
  // {'a': 1; 'b': 2}
  let map = new Map();
  let quantity = 1;

  for (let i = 0; i < ransomNote.length; i++) {
    if (map.has(ransomNote[i])) {
      map.set(ransomNote[i], map.get(ransomNote[i]) + 1);
    } else {
      map.set(ransomNote[i], quantity);
    }
  }

  for (let number of magazine) {
    if (map.has(number)) {
      map.set(number, map.get(number) - 1);
      if (map.get(number) === 0) {
        map.delete(number);
      }
    }
  }
  return map.size === 0;
};

// 0(n^2)
// var canConstruct = function (ransomNote, magazine) {
// const magazineLetters = magazine.split('')
// const ransomNoteLetters = ransomNote.split("");
// for (let letter of ransomNoteLetters) {
//     if (magazineLetters.includes(letter)) {
//         const index = magazineLetters.indexOf(letter);
//         magazineLetters.splice(index, 1)
//     } else { return false; }
// }
// return true;
// };
