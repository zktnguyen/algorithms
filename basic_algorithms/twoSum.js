(function(){
  function twoSumBruteForce(arr, num){
    var len = arr.length;
    if (len < 2){
      return null;
    }
    for (var i = 0; i < len-1; i++){
      var diff = num - arr[i];
      for (var j = i+1; j < len; j++){
        if (arr[j] === diff){
          return true;
        }
      }
    }
    return false;
  }
  
  function twoSum(arr, num){
    var len = arr.length;
    if (len < 2){
      return null;
    }
    var differences = {};
    for (var i = 0; i < len; i++){
      var difference = num - arr[i];
      if (differences[arr[i]]=== difference) return true;
      else {
        differences[difference] = arr[i];
      }
    }

    return false;
    
  }

  console.log(twoSum([10, 1,2,7,4, 54], 64));
}());