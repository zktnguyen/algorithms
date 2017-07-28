(function(){

  function mergeSort(arr){
    // Split the array in half, to a left and right subarray.
    // Return the sorted version of the subarrays.
    var len = arr.length;
    if (len < 2){
      return arr;
    }
    var mid = Math.floor(len/2),
    left = arr.slice(0, mid), right = arr.slice(mid);

    return sort(mergeSort(left), mergeSort(right));
  }

  function sort(left, right){
    var mergedArray = [];
    var leftLength = left.length, rightLength = right.length;
    var l = 0, r = 0;
    while(l < leftLength && r < rightLength){
      if (left[l] < right[r]){
        mergedArray.push(left[l++]);
      }
      else {
        mergedArray.push(right[r++]);
      }
    }
    while (l < leftLength){
      mergedArray.push(left[l++]);
    }
    while (r < rightLength){
      mergedArray.push(right[r++]);
    }

    return mergedArray;
  }

  console.log(mergeSort([7, 5, 2, 4, 3, 9]));
}());