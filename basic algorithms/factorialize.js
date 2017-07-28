(function(){
  'use strict';

  // recursive
  function factorialize(num){
    if (num === 0) {
      return 1;
    }
    return num * factorialize(num - 1);
  }

  // iterative
  function factorializeIterative(num){
    if (num === 0){
      return 1;
    }
    var factorial = 1;
    for (var i = 2; i <= num; i++){
      factorial *= i;
    }
    return factorial;
  }

  console.log("factorialize 10: " + factorialize(10) + " and " + factorializeIterative(10));
}());