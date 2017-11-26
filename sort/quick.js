(function(){
  'use strict';
  function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  // partition function
  // returns the left most index that has not been partitioned yet
  
  function partition(arr, low, high){
    // pivot is chosen as the right most element
    var pivot = arr[high];
    var left = low;
    // go through the subarray, and swap elements smaller than the pivot
    // to the left
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
      // Get the new partition index, the partition index will be in the right place
      var partitionIndex = partition(arr, low, high);
      
      // this will sort the first half of the array up to partition index
      quickSort(arr, low, partitionIndex - 1);

      // sorts the second half after the partition index
      quickSort(arr, partitionIndex + 1, high);
    }
    return arr;
  }



  console.log(quickSort([1, 10, 5, 15, 22, 44, 7, 60, 20], 0, 8));
}());