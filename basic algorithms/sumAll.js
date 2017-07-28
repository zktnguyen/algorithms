(function(){
  'use strict';
  function sumAll(arr) {
  
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  var newArr = [];
  for (var i = min; i <= max; i++){
    newArr.push(i);
  }
  var sum = newArr.reduce(function(a, b){
    return a += b;
  }, 0);
  return sum;
}
  
}());