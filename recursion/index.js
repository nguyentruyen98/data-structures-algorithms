//1, identify the base case.
//2,  identify the recursive case.
//3, get closer and closer.

//1, Factorial
function findFactorialIterative(num) {
  let result = 1;
  if (num === 2) {
    result = 2;
  }
  for (let i = 2; i <= num; i++) {
    result = result * i;
  }
  return result;
}
function findFactorialRecursive(num) {
  if (number === 2) return 2;
  return num * findFactorialRecursive(number - 1);
}
//2, Fibonacci
function fibonacciIterativeRecursive(n) {
  //O(2^n)
  if (n < 2) {
    return n;
  }
  return (
    fibonacciIterativeRecursive(n - 1) + fibonacciIterativeRecursive(n - 2)
  );
}
function fibonacciIterative(n) {
  //O(n-2) = O(n)
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}
function reverseString(str) {
  let arrayStr = str.split("");
  let reversedArray = [];
  //We are using closure here so that we don't add the above variables to the global scope.
  function addToArray(array) {
    if (array.length > 0) {
      reversedArray.push(array.pop());
      addToArray(array);
    }
    return;
  }
  addToArray(arrayStr);
  return reversedArray.join("");
}

reverseString("yoyo master");

function reverseStringRecursive(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

reverseStringRecursive("yoyo master");

// Recursvion
// Upside
// 1, DRY
// 2, Readability
// Downside
// 1, Large stack

// Review
//  anything you do with a recursion can be done iteratively
let calculations = 0;
function fibonacci(n) { //O(2^n)
  
  if (n < 2) {
    return n
  }
  return fibonacci(n-1) + fibonacci(n-2);
}

function fibonacciMaster() { //O(n)
  let cache = {};
  return function fib(n) {
    calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n-1) + fib(n-2);
        return cache[n];
      }
    }
  }
}

function fibonacciMaster2(n) {
  let answer = [0,1];
  for ( let i = 2; i <= n; i++) {
    answer.push(answer[i-2]+ answer[i-1]);
  }
  return answer.pop();
}

const fasterFib = fibonacciMaster();

console.log('Slow', fibonacci(35))
console.log('DP', fasterFib(100));
console.log('DP2', fibonacciMaster2(100));
console.log('we did ' + calculations + ' calculations');