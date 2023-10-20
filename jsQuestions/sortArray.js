function sortArrayDecending(arr) {
  const n = arr.length;
  let swap;

  do {
    swap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
          swap = true;
          console.log(arr, 1)
      }
      }
      console.log(arr, 2)
    } while (swap);
    return arr;
}

const inputArray = [5, 1, 4, 2, 8];
const sortedArray = sortArrayDecending(inputArray);
console.log(sortedArray, 3);