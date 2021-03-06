(function(){
  'use strict';
  function insertionSort(arr){
    var len = arr.length;
    if (len < 2){
      return arr;
    }
    // look at all elements starting from the 2nd one
    // This is the insertion method: place the element to the left-most spot
    // that you are currently looking at
    for (var i = 1; i < len; i++){
      var current = arr[i];
      var j = i;

      while (j > 0 && current < arr[j-1]){
        arr[j] = arr[j-1]; // shift down
        j--;
      }
      // Found the index the current element belongs, re-assign
      arr[j] = current;
    }
    return arr;
  }

  console.log(insertionSort([5,2,4,10,7,3]));
  
}());