//#5 Space complexity O(1)
function boooo(n) {
  for (let i = 0; i < n; i++) {
    console.log("booooo");
  }
}

// #6 Space complexity O(n)
function arrayOfHiNTimes(n) {
  var hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}

arrayOfHiNTimes(6);

// Find 1st, Find Nth....
const array = [
  { name: "hi", date: 2001 },
  { name: "my", date: 2011 },
  { name: "teddy", date: 2021 },
];

array[0]; //O(1)
array[array.length - 1]; //O(1)
