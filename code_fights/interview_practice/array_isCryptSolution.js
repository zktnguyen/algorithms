function isCryptSolution(crypt, solution) {
  var arrayToObject = function(arr){
      var obj = {};
      for (var i = 0; i < arr.length; i++){
          var key = arr[i][0], value = arr[i][1];
          obj[key] = value;
      }
      return obj;
  };
  
  var solutionObject = arrayToObject(solution);
  
  var findCrypt = function(word){
      var crypt = '';
      for (var i = 0; i < word.length; i++){
          crypt += solutionObject[word.charAt(i)];
      }
      return crypt;
  };
  
  var cryptarithm = [];
  for (var i = 0; i < crypt.length; i++){
      var cryptSol = findCrypt(crypt[i]);
      if (cryptSol.charAt(0) === '0' && cryptSol.length > 1){
          return false;
      }
      cryptarithm.push(cryptSol);
  }
  
  return parseInt(cryptarithm[0]) + parseInt(cryptarithm[1]) === parseInt(cryptarithm[2]);
}
