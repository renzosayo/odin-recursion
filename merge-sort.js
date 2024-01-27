function mergeSort (arr) {
  let sortedArr = [];
  // base case
  if (arr.length === 1) {
      return arr;
  } else {
    let mid = Math.floor(arr.length / 2);
    let arr1 = mergeSort(arr.slice(0, mid));
    let arr2 = mergeSort(arr.slice(mid));
    while (arr1.length && arr2.length) {
      if (arr1[0] < arr2[0]) {
        sortedArr.push(arr1.shift());
      } else {
        sortedArr.push(arr2.shift());
      }
    }
    sortedArr = [...sortedArr, ...arr1, ...arr2];
  }
  return sortedArr;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
