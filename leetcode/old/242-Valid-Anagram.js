let s = "anagram";
let t = "anrrrrm";

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let sCount = {};
  // sCount {"a" : 3, "n" : 1, ""...}

  let tCount = {};
  // sCount {"n" : 1, "a" : 1, ""...}

  for (let i = 0; i < s.length; i++) {
    if (sCount[s[i]] > 0) {
      sCount[s[i]]++;
    } else sCount[s[i]] = 1;
  }
  for (let j = 0; j < t.length; j++) {
    if (tCount[t[j]] > 0) {
      tCount[t[j]]++;
    } else tCount[t[j]] = 1;
  }

  return true;
};
//второй способ через вычисления значений из одного обьекта
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let sCount = {};
  // sCount {"a" : 3, "n" : 1, ""...}

  for (let i = 0; i < s.length; i++) {
    if (sCount[s[i]] > 0) {
      sCount[s[i]]++;
    } else sCount[s[i]] = 1;
  }
  for (let j = 0; j < t.length; j++) {
    sCount[t[j]]--;
  }

  console.log(sCount, "sCount");
  console.log(Object.values(sCount), "sCount");

  //тут нужно найти сумму элементов
  //если сумма элементов равна нулю тру, иначе фолс
  //   if (sCount.length === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
};

console.log(isAnagram(s, t));
