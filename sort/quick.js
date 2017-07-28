(function(){
  'use strict';
  function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function partition(arr, low, high){
    var pivot = arr[high];
    var left = low;

    for (var j = low; j < high; j++){
      if (arr[j] < pivot){
        swap(arr, left++, j);
      }
    }
    swap(arr, left, high);
    return left;
  }

  function quickSort(arr, low, high){

    var len = arr.length;
    if (len < 2){
      return arr;
    }
    
    if (low < high){
      var partitionIndex = partition(arr, low, high);
      
      quickSort(arr, low, partitionIndex - 1);
      quickSort(arr, partitionIndex + 1, high);
    }
    return arr;
  }



  console.log(quickSort([1, 10, 5, 15, 22, 44, 7, 60, 20], 0, 8));
}());