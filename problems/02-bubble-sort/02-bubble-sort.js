/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
let numArray = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function change(numArray, i, j) {
  let temp = numArray[i];
  numArray[i] = numArray[j];
  numArray[j] = temp;
  }

function bubbleSort(numArray) {
    for(let i = 0; i < numArray.length; i++) {
      for(let j = 1; j < numArray.length; j++) {
        if(numArray[j - 1] > numArray[j]) {
          change(numArray, j - 1, j);
        }
      }
    }
    return numArray;
  }
  
  console.log(bubbleSort(numArray));