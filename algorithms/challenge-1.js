function countTruthy(arr) {
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i]) {
      count++;
    }
  }
  return count;
}
console.log(countTruthy([10, 20, 'john', 5, 15])); // 4
console.log(countTruthy([10, 20, '', '', 5]));
console.log(countTruthy([10, 20, '', 5, 15]));
console.log(countTruthy(['', 0, 0, undefined, 7]));

module.exports = countTruthy;
