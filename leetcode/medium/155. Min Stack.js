var MinStack = function () {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */

// saving with each val the smallest element

MinStack.prototype.push = function (val) {
  return this.stack.push({
    val,
    min:
      this.stack.length === 0
        ? val
        : Math.min(val, this.stack[this.stack.length - 1].min),
  });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
