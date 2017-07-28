(function(){
  'use strict';
  function bubbleSort(arr) {
    var len = arr.length;
    if (len < 2){
      return arr;
    }
    // begin from the end
    for (var i = len - 1; i >= 0; i--){
      for (var j = 0; j < i; j++){
        if (arr[j] > arr[j+1]){
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
    }
    return arr;
  }

  console.log(bubbleSort([7,5,2,4,3,9]));
  console.log(bubbleSort([9,7,5,4,3,1]));
  console.log(bubbleSort([1,2,3,4,5,6]));

}());