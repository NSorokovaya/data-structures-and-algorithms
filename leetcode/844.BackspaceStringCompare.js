var backspaceCompare = function (s, t) {
  let firstString = [];
  let secondString = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#" && s.length > 0) {
      firstString.pop(s[i - 1]);
    } else {
      firstString.push(s[i]);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (t[i] === "#" && t.length > 0) {
      secondString.pop(t[i - 1]);
    } else {
      secondString.push(t[i]);
    }
  }

  return firstString.join("") === secondString.join("");
};
