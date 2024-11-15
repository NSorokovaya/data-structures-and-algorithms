var MyQueue = function () {
  this.firstStack = [];
  this.secondStack = [];
};

// const obj = new MyQueue();
// console.log(obj.firstStack); // logs []
// console.log(obj.secondStack); // logs []

// const obj1 = new MyQueue();
// console.log(obj1.firstStack); // logs []
// console.log(obj1.secondStack); // logs []

// obj.firstStack === obj1.firstStack; // false
// MyQueue.firstStack

MyQueue.prototype.push = function (x) {
  if (x !== undefined) {
    this.firstStack.unshift(x);
  }
};

MyQueue.prototype.pop = function () {
  // stack1: [3, 2, 1 ]
  // stack2: []
  this.secondStack = [];
  while (this.firstStack.length !== 0) {
    this.secondStack.unshift(this.firstStack.shift());
  }
  // stack1: []
  // stack2: [1, 2, 3]
  const firstElement = this.secondStack.shift();
  // stack1: []
  // stack2: [ 2, 3]
  while (this.secondStack.length !== 0) {
    this.firstStack.unshift(this.secondStack.shift());
  }
  // stack1: [3, 2]
  // stack2: []
  return firstElement;
};

MyQueue.prototype.peek = function () {
  // stack1: [3, 2, 1 ]
  // stack2: []
  this.secondStack = [];
  while (this.firstStack.length !== 0) {
    this.secondStack.unshift(this.firstStack.shift());
  }
  // stack1: []
  // stack2: [1, 2, 3]
  const firstElement = this.secondStack[0];
  // stack1: []
  // stack2: [ 2, 3]
  while (this.secondStack.length !== 0) {
    this.firstStack.unshift(this.secondStack.shift());
  }
  // stack1: [3, 2]
  // stack2: []
  return firstElement;
};

MyQueue.prototype.empty = function () {
  return this.firstStack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
