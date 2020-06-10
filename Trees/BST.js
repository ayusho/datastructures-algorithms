class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;

      while (true) {
        if (value < current.data) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
  lookup(value) {
    if(!this.root){
        return false;
    }

    let currentNode = this.root;
    while(currentNode) {
        if(value < currentNode.data){
            currentNode = currentNode.left;
        }
        else if(value > currentNode.data) {
            currentNode = currentNode.right;
        }
        else if(value === currentNode.data){
            return currentNode;
        }
    }
    return false;
  }

  //DIY
  remove(){}
}


let tree = new BST();

tree.insert(60);
tree.insert(20);
tree.insert(10);
tree.insert(70);

// console.log(JSON.stringify(tree));
console.log(tree.lookup(71));
