class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
      const newNode = new Node(value);
      if(this.length == 0){
          this.first = newNode;
          this.last = newNode;
      }
      else {
          this.last.next = newNode;
          this.last = newNode;
      }
      this.length++;
      return this;
  }

  dequeue() {
      if(this.length == 0) {
          return this;
      }
      else {
        let second = this.first.next;
        this.first = second;
        this.length--;
      }
      return this;
  }

  peek() {}
}

let queue = new Queue();

queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

queue.dequeue();
console.log(queue);