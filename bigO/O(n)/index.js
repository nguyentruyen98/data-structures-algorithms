// O(n) --> Linear time
// Phụ thuộc vào số lượng item trong mảng
// Số lượng item tăng thì số lượng operation tăng theo tuyến tính.

const nemo = ["nemo"];
const large = new Array(100000).fill("nemo");

function findNemo(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
}
findNemo(large);

// Example
function funChallenge(input) {
  let a = 10; //O(1)
  a = 50 + 3; //O(1)

  for (let i = 0; i < input.length; i++) {
    // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; //O(1)
}
// 3 + n + n + n
//Big O(3+4n) = O(n)
