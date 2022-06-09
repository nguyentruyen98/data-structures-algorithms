// Binary tree
//  Right of the root node must be greater than left of the current node
//Each node can only have either zero one or two notes and each child can only have one parent.
// Trường hợp tốt nhất O(log n) trường hợp xấu nhất O(n)
// Upside
// better than O(n)
// ordered
// flexible size
//Downside
// no O(1) operation

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    //Code here
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return false;
  }
  // remove
}

//Binary heaps
// Giống như Binary tree nhưng không có quy tắc thằng bên trái bé hơn bên phải
// Thằng root là thằng có value lớn nhất. và thằng cha có value lớn hơn thằng con

// Upside
//1, better than O(n)
//2, priority
//3, flexible size
//4, fast insert
// downside
// slow lookup
