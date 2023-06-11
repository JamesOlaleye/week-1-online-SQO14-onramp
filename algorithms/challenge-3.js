function sumMix(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return sum;
}

console.log(sumMix([2, '5', 5, '3']));
module.exports = sumMix;
