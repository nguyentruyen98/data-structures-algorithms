const nemo = ["nemo"];
const large = new Array(100000).fill("nemo");

function findNemo(arr) {
  console.log(arr[0]);
}
findNemo(large);
// O(1) Constant time
// Không quan trọng mảng có bao nhiêu item, nó chỉ log thằng đẩu tiên trong mảng.

function anotherFunChallenge(input) {
  let a = 5; //O(1)
  let b = 10; //O(1)
  let c = 50; //O(1)
  for (let i = 0; i < input; i++) {
    //O(n)
    let x = i + 1; //O(n)
    let y = i + 2; //O(n)
    let z = i + 3; //O(n)
  }
  for (let j = 0; j < input; j++) {
    //O(n)
    let p = j * 2; //O(n)
    let q = j * 2; //O(n)
  }
  let whoAmI = "I don't know"; //O(1)
}
// 4 + n + n + n + n + n + n + n
//Big O(4+7n) = O(n)


//Drop constants
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]); //O(1)

  var middleIndex = Math.floor(items.length / 2); //O(1)
  var index = 0; //O(1)

  while (index < middleIndex) {
    console.log(items[index]); //O(n/2)
    index++;
  }

  for (var i = 0; i < 100; i++) {
    console.log("hi"); //O(100)
  }
}
//O(1+n/2+100) = O(n/2+101) = O(n)
