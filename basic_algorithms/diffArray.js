(function(){
  'use strict';
  
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  arr1.forEach(function(e){
    if (arr2.indexOf(e) === -1){
      newArr.push(e);
    }
  });
  arr2.forEach(function(e){
    if (arr1.indexOf(e) === -1){
      newArr.push(e);
    }
  });
  return newArr;
}
  
}());