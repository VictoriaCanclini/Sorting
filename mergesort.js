function split(wholeArray) {
  let mitad = Math.floor(wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, mitad);
  let secondHalf = wholeArray.slice(mitad);
  return [firstHalf, secondHalf];
}

function Merge(arr1, arr2) {
  let arrFinal = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j] || !arr2[j]) {
      arrFinal.push(arr1[i]);
      i++;
    } else {
      arrFinal.push(arr2[j]);
      j++;
    }
  }
  return arrFinal;
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let [firstHalf, secondHalf] = split(array);
  let sorted1 = mergeSort(firstHalf);
  let sorted2 = mergeSort(secondHalf);

  return Merge(sorted1, sorted2);
}
