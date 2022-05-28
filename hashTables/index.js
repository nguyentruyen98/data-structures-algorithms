//A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found.
// During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.

//Collision
//A search algorithm that uses hashing consists of two parts. The first part is computing a hash function which transforms the search key into an array index.
//The ideal case is such that no two search keys hashes to the same array index, however, this is not always the case, and is impossible to preclude for unseen given data.

//ES6

//Map
const a = new Map();
// Cho phép lưu key bằng bất cứ loại dữ liệu nào
// Không theo bất cứ thứ tự nào như a

//Set
const b = new Set();
// Giống Map nhưng chỉ lưu key.

//Implement A Hash table
class HashTable {
  constructor(size) {
    this.data = new Array(size);
    // this.data = [];
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keysArray = [];
    console.log(this.data.length);
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.set("apples", 9);
myHashTable.get("apples");
// First Recurring Character (Tìm số lặp lại đầu tiên)
//Input: [2,5,1,2,3,5,1,2,4]
//Output: 2
//Input: [2,1,1,2,3,5,1,2,4]
//Output: 1
//Input: [1,2,3,4,5]
//Output: undefined
const firstRecurringCharacter = (array) => {
  let map = {};
  for (let i = 0; i < array.length; i++) {
    if (map[array[i]] !== undefined) {
      console.log(map);
      return array[i];
    }
    map[array[i]] = array[i];
  }
  return undefined;
}; //O(n)
//Upside:
//-Fast lookups.
//-Fast inserts.
//-Flexible Keys.

//Downside:
//-Unordered
//-Slow key interation
