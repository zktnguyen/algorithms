(function(){
  'use strict';
  function swap(arr, i , j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function bubbleSort(arr) {
    var len = arr.length;
    if (len < 2){
      return arr;
    }
    
    // Begin sorting from 0 to len - 1
    for (var i = len - 1; i >= 0; i--){
      // goes through subarray 0 to i
      for (var j = 0; j < i; j++){
        // checks if left element is larger than right
        if (arr[j] > arr[j+1]){
          // swap the elements if its true
          swap(arr, j, j+1);
        }
      }
    }
    return arr;
  }

  // Test the function
  console.log(bubbleSort([7,5,2,4,3,9]));
  console.log(bubbleSort([9,7,5,4,3,1]));
  console.log(bubbleSort([1,2,3,4,5,6]));

}());