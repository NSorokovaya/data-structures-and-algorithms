var evalRPN = function (tokens) {
  let stack = [];

  let set = new Set(["+", "-", "*", "/"]);

  for (let token of tokens) {
    if (!set.has(token)) {
      stack.push(Number(token));
    } else {
      let b = stack.pop();
      let a = stack.pop();

      switch (token) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(Math.trunc(a / b));
          break;
      }
    }
  }
  return stack[0];
};
