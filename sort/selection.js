(function(){
  'use strict';

  function swap(arr, i , j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  // Selection sort is a sorting function where we search for the minimum
  // in the array, and place it where it belongs (in the front)
  function selectionSort(arr){
    var minIndex = 0, len = arr.length;
    if (len < 2){
      return arr;
    }
    // Begin from the beginning
    for (var i = 0; i < len; i++){
      minIndex = i;
      // Reassign the minimum index if there is an element smaller than the initial
      for (var j = i; j < len; j++){
        if (arr[j] < arr[minIndex]){
          minIndex = j;
        }
      }
      // Swap the elements if it is not the same as the initial.
      if (minIndex !== i){
        swap(arr, i, minIndex);
      }
    }
    return arr;
  }

  console.log(selectionSort([5,1,12,-5,16,2,12,14]));
}());