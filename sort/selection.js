(function(){
  'use strict';

  function selectionSort(arr){
    var minIndex = 0, len = arr.length;
    if (len < 2){
      return arr;
    }
    for (var i = 0; i < len; i++){
      minIndex = i;
      for (var j = i; j < len; j++){
        if (arr[j] < arr[minIndex]){
          minIndex = j;
        }
      }
      if (minIndex !== i){
        var temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
    return arr;
  }

  console.log(selectionSort([5,1,12,-5,16,2,12,14]));
}());