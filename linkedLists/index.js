const basket = ["apples", "grapes", "pears"];

// linked list: apples --> grapes --> pears

// apples
// 8947 --> grapes
//           8742 --> pears
//                     372 --> null
//---> Pointer

// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    //O(1)
    // const newNode = new Node(value)

    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    //O(1)
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array; //---> [10,5,16,20]
  }
  insert(index, value) {
    //Check params
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = { value, next: null };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  removeLastItem() {
    const leader = this.traverseToIndex(this.length - 1 - 1);
    leader.next = null;
    this.tail = leader;
    this.length--;
    console.log(this);

    return this.printList();
  }
  remove(index) {
    //check params
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(20);
myLinkedList.removeLastItem();

// let a = { name: "1234", next: { value: 1 } };
// let b = a;
// b = a.next;
// b.value = 2;
// console.log(a); //2
// console.log(b); //2;

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    //O(1)
    // const newNode = new Node(value)

    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    //O(1)
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array; //---> [10,5,16,20]
  }
  insert(index, value) {
    //Check params
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = { value, next: null, prev: null };
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.next = follower;
    newNode.prev = leader;
    follower.prev = newNode;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  removeLastItem() {
    const leader = this.traverseToIndex(this.length - 1 - 1);
    leader.next = null;
    this.tail = leader;
    this.length--;
    console.log(this);

    return this.printList();
  }
  remove(index) {
    //check params
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
}

let myDoublyLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(20);
myLinkedList.removeLastItem();
//Single vs Double
//Upside and Downside
// Upside
//-Fast insert
//-Fast Delete
//-Ordered
//-Flexible size
// Downside
//-Slow Lookup
//-More memory
