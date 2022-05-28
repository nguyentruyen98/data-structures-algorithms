// lookup O(1)
// push O(1)
// insert O(n)
// delete O(n)
const strings = ["a", "b", "c", "d"];
const numbers = [1, 2, 3, 4, 5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.

//push
strings.push("e"); // O(1)

//pop
strings.pop(); // O(1)
strings.pop(); // O(1)

//unshift
strings.unshift("x"); //O(n)

//splice
strings.splice(2, 0, "alien"); //O(n)

console.log(strings);

//------------------------------->
// static vs Dynamic arrays
// Low level language => static array
// high level language => dynamic array
// Khi js cập nhật một cái array nó copy array cũ rồi chuyển vào một vùng nhớ mới
//------------------------------->
//Classes in javascript

//reference type

//context vs scope
// Context tells you where we are within the object.
function test() {
  let a = 4;
}

const object = {
  a: function () {
    console.log(this);
  },
};
//instantiantion
//class
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi, I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    // bất cứ khi nào muốn kế thừa thứ gì đó, chúng ta cần phải gọi hàm constructor của thằng cha.
    // chúng ta sử dụng super để truyền những thứ gì chúng ta muốn vào hàm constructor của thằng cha
    super(name, type);
  }
  play() {
    console.log(`WEEEEEEE I am a ${this.type}`);
  }
}
//constructor function
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
const wizard1 = new Wizard("Zao", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");

//------------------------------->
// Implementing an array
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  deleteAtIndex(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    console.log(this.data[this.length - 1]);
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArray = new MyArray();
myArray.push("hi");
myArray.push("you");
myArray.push("!");
myArray.pop();
myArray.deleteAtIndex(0);
myArray.push("are");
myArray.push("nice");
myArray.shiftItems(0);
console.log(myArray);
//------------------------------->
//Create a function that reverses a string:
//'abc'->'cba'
function reverses(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== "string")
    return "Invalid string";
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards.join(""));
  return backwards.join("");
}

function reverses2(str) {
  return str.split("").reverses().join("");
}

reverses("abc");
//------------------------------->
//Merge sorted arrays
//input ([0,3,4,31],[4,6,30])
//output ([0,3,4,4,6,30,31])
function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    if (array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArray;
}
