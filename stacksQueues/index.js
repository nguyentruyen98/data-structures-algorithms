// //Stack
// // FILO
// // lookup O(n)
// // pop O(1) remove last item
// // push O(1) add item
// // peek O(1) view the top most item

// // Queues
// //FIFO The first item in the queue gets access first.
// // lookup O(n)
// // enqueue O(1) (push)
// // dequeue O(1) (pop)
// // peek O(1)

// //Stack vs queues
// //Stacks

// //Array
// //LinkedList

// //Queues

// //Array
// //LinkedList

// // How Javascript works

// //What is programm?

// //1, allocate memory
// //2, parse and execute

// //V8 engine: read the javascript that we write and changes into machine executable instructions for the browser.

// // Memory heap and call stack:
// // Memory heap: where the memory allocation happens.
// // Call stack: This is where your code is read and executed. It tells you where you are in the program.
// // Memory leak: Well, memory leaks happen when you have unused memory, such as let's say we're not using the variable

// //Global variables are bad because if we don't forget to clean up after ourselves, we fill up this memory
// //keep and eventually the browser will not be able to work.

// //JavaScript is a single threaded language that can be non blocking.
// //Single threaded means that it has only one call stack.
// //And one calls that only you can only do one thing at a time, and as you saw, whole stack is first

// // console.log(1);
// // setTimeout(() => console.log(2), 2000);
// // console.log(3);

// // console.log(1);
// //Call stack

// //Web api

// //Callback queue

// //Event loop

// //stack with linked list
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }
//   peek() {
//     return this.top;
//   }
//   push(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.top = newNode;
//       this.bottom = newNode;
//     } else {
//       const holdingPointer = this.top;
//       this.top = newNode;
//       this.top.next = holdingPointer;
//     }
//     this.length++;
//     return this;
//   }
//   pop() {
//     if (!this.top) {
//       return null;
//     }
//     if (this.top === this.bottom) {
//       this.bottom = null;
//     }
//     // const holdingPointer = this.top;
//     this.top = this.top.next;
//     this.length--;
//     return this;
//   }
//   //isEmpty
// }
// class StackArray {
//   constructor() {
//     this.array = [];
//   }
//   peek() {
//     return this.array[this.array.length - 1];
//   }
//   push(value) {
//     this.array.push(value);
//     return this;
//   }
//   pop() {
//     this.array.pop();
//     return this;
//   }
// }
// const myStack = new Stack();
// myStack.push("google");
// myStack.push("udemy");
// console.log(myStack.push("discord"));
// myStack.pop();

// //Queue
// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.length = 0;
//   }
//   peek() {
//     return this.first;
//   }
//   enqueue(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       this.last.next = newNode;
//       this.last = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   dequeue() {
//     if (!this.first) {
//       return null;
//     }
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     const holdingPointer = this.first;
//     this.first = this.first.next;
//     this.length--;
//     return this;
//   }
//   //isEmpty;
// }
// const testQu = new Queue();
// testQu.enqueue("Joy");
// testQu.enqueue("Tomy");
// console.log(testQu.enqueue("Matt"));

// // Queues using stacks
// class CrazyQueue {
//   constructor() {
//     this.first = [];
//     this.last = [];
//   }

//   enqueue(value) {
//     const length = this.first.length;
//     for (let i = 0; i < length; i++) {
//       this.last.push(this.first.pop());
//     }
//     this.last.push(value);
//     return this;
//   }

//   dequeue() {
//     const length = this.last.length;
//     for (let i = 0; i < length; i++) {
//       this.first.push(this.last.pop());
//     }
//     this.first.pop();
//     return this;
//   }
//   peek() {
//     if (this.last.length > 0) {
//       return this.last[0];
//     }
//     return this.first[this.first.length - 1];
//   }
// }
// const myQueue = new CrazyQueue();
// // myQueue.peek();
// myQueue.enqueue("Joy");
// myQueue.enqueue("Matt");
// myQueue.enqueue("Pavel");
// console.log(myQueue.peek());
// myQueue.dequeue();
// myQueue.dequeue();
// console.log(myQueue.enqueue("Noob"));
// // myQueue.peek();
// // Stack + Queues
// // Upside
// // Fast Operations
// // Fast Peek
// // Ordered
// //Downside
// // Slow lookup

//

function swap(a, b) {
  const temp = a;
  a = b;
  b = temp;
  return [a, b];
}
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const pivotIndex = arr.length - 1;
  const pivot = arr[pivotIndex];

  const left = [];
  const right = [];
  let currentItem;
  for (let i = 0; i < pivotIndex; i++) {
    currentItem = arr[i];
    if (currentItem < pivot) left.push(currentItem);
    else right.push(currentItem);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
const a = quickSort([1, 3, 4, 5, 6, 3, 2, 4, 5]);
console.log(a);

// [1, 2, 3, 3, 4, 4, 5, 5, 6]
//     1        4        7
function buildBomb(arr) {
  const sortArr = quickSort(arr);
  let index = 1;
  for (let i = 0; i < sortArr.length; i++) {
    if ((i - 1) % 3 === 0) {
      const temp = sortArr[i];
      sortArr[i] = sortArr[i + 1];
      sortArr[i + 1] = temp;
    }
  }
  return sortArr;
}
const test = buildBomb([1, 3, 4, 5, 6, 3, 2, 4, 5]);
console.log(test);
