function filterList(arr) {
  //   return arr.filter((i) => typeof i !== 'string');
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    if (typeof elem !== 'string') {
      newArr.push(elem);
    }
  }
  return newArr;
}
console.log(filterList([1, 2, 'a', 'b']));
module.exports = filterList;
