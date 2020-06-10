class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let temp = this.top;
      temp.next = newNode;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length == 0) {
      return null;
    }
    let temp = this.top;
    this.top = this.top.next;
    this.length--;
    return temp;
  }
  isEmpty() {}
  printStack() {
    let current = this.top;
    let arr = ``;
    while (current) {
      arr += `${current.value}->`;
      current = current.next;
    }
    console.log(arr);
  }
}

const myStack = new Stack();

myStack.push(1);
// myStack.push(2);
myStack.push(3);
// myStack.push(4);
// myStack.pop();

// myStack.peek();
myStack.printStack();
console.log(myStack.peek());
