function binarySearch(array, num, start, end) {
  const midIndex = Math.floor((end + start) / 2);
  if (start > end) return false;

  if (array[midIndex] === num) return true;

  if (array[midIndex] > num) {
    return binarySearch(array, num, start, midIndex - 1);
  } else if (array[midIndex] < num) {
    return binarySearch(array, num, midIndex + 1, end);
  }
}
const a = binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 9, 0, 7);
console.log(a);
