(function(){
  'use strict';
  /*
  1.8 Assume you have a method isSubstring which checks if one word is a
substring of another. Given two strings, si and s2, write code to check if s2 is
a rotation of si using only one call to isSubstring (e.g.,"waterbottle"is a rotation
of "erbottlewat").
   */
  
  function isRotation(str1, str2){
    var newStr = str1.concat(str1);

    return isSubstring(newStr, str2);
  }

}());