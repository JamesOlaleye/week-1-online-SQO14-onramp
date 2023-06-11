function calculateGrade(arr) {
  let sum = 0;

  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  //const sum = arr.reduce((sum, i) => sum + i, 0);

  const average = sum / arr.length;

  if (average >= 90) {
    return 'A';
  } else if (average >= 80) {
    return 'B';
  } else if (average >= 70) {
    return 'C';
  } else if (average >= 60) {
    return 'D';
  } else if (average >= 50) {
    return 'E';
  } else {
    return 'F';
  }
}
console.log(calculateGrade([89, 50, 40, 90, 77]));
console.log(calculateGrade([19, 5, 42, 2, 77]));
module.exports = calculateGrade;
