(function(){
  'use strict';
  // iterative
  function palindromeIterative(str){
    var len = str.length;
    for (var i = 0; i < len/2; i++){
      if (str[i] !== str[len - 1 - i]){
        return false;
      }
    }
    return true;
  }

  function palindromeBuilt(str){
    var stripped = str.replace(/[\W_]/g, '').toLowerCase();
    var reversed = stripped.split('').reverse().join('');
    return stripped === reversed;
  }
  console.log("palindrome racecar: " + palindromeIterative("racecar") + palindromeBuilt("racecar"));
  console.log("palindrome tongue: " + palindromeIterative("tongue") + palindromeBuilt("tongue"));
}());