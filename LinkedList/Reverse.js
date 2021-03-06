class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor(data) {
      this.head = {
        data: data,
        next: null,
      };
      this.tail = this.head;
      this.length = 1;
    }
  
    append(value) {
      let newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  
    prepend(value) {
      let newNode = new Node(value);
  
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
  
      if(index === 0) {
        this.prepend(value);
        return; 
      }
      if(index == this.length){
        
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
      if(index === 0){
        this.head = current.next;
        this.length--;
        return;
      }
      while(current && counter < index) {
        prev = current;
        current = current.next;
        counter++;
      }
      prev.next = current.next;
      current.next = null;
      this.length--;
    }

    reverse() {
        let prev = null, next = null;
        let current = this.head;
        if(this.length < 2) {
            return this;
        }

        while(current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;

        return this;
    }
  }
  
  let node = new LinkedList(1);
  node.append(2);
  node.append(3);
  node.append(4);
  node.append(5);
  node.reverse();

//   node.prepend(0);
//   node.prepend(32);
//   node.insert(2, 99);
//   node.insert(0, 67);
//   node.remove(2);
  
  node.printList();
  