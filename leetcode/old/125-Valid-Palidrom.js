var isPalindrome = function (s) {
  const stringToLowerCase = s.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
  const reversedString = s
    .toLowerCase()
    .replace(/[^A-Za-z0-9]/g, "")
    .split("")
    .reverse()
    .join("");
  console.log(reversedString);
  return reversedString === stringToLowerCase;
};

//second way
var isPalindrome = function (s) {
  const stringToLowerCase = s.toLowerCase().replace(/[^A-Za-z0-9]/g, "");

  for (let i = 0; i < Math.floor(stringToLowerCase.length / 2); i++) {
    if (
      stringToLowerCase[i] !==
      stringToLowerCase[stringToLowerCase.length - 1 - i]
    ) {
      return false;
    }
  }
  return true;
};
