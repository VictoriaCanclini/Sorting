function bubbleSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        swap(j, j + 1, array);
      }
    }
  }
  return array;
}
function swap(i, j, arr) {
  let variableTemporal = arr[i];
  arr[i] = arr[j];
  arr[j] = variableTemporal;
}
