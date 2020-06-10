class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(data) {
    this.head = {
      data: data,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    let newNode = new Node(value);

    newNode.prev = this.tail;

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    let newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  printList() {
    let array = ``;
    let current = this.head;
    while (current) {
      array += `${current.data}=>`;
      current = current.next;
    }
    console.log(array);
  }

  insert(index, value) {
    let newNode = new Node(value);
    let current = this.head;
    let counter = 0;

    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index == this.length) {
    }
    while (current && counter < index - 1) {
      current = current.next;
      counter++;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.length++;
  }

  remove(index) {
    let current = this.head;
    let counter = 0;
    let prev;
    if (index === 0) {
      this.head = current.next;
      this.length--;
      return;
    }
    while (current && counter < index) {
      prev = current;
      current = current.next;
      counter++;
    }
    prev.next = current.next;
    current.next = null;
    this.length--;
  }
}

let node = new LinkedList(1);
node.append(2);
node.prepend(0);
node.prepend(32);
node.insert(2, 99);
node.insert(0, 67);
node.remove(2);

node.printList();
