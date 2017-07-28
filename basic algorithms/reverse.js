(function () {
  'use strict';
  // iterative version
  function reverseStringIterative(str) {
    var newStr = "";
    if (!str || str.length < 2) {
      return str;
    }
    for (var i = str.length - 1; i >= 0; i--){
      newStr += str[i];
    }
    return newStr;
  }
  // built-in function version
  function reverseString(str) {
    if (!str || str.length < 2) return str;
    return str.split("").reverse().join("");
  }

  function reverseStringRecursive(str){
    if (str === ""){
      return "";
    }
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
  console.log("lawrence in reverse: " + reverseStringIterative("lawrence") + " and " + reverseString("lawrence") + " and " + reverseStringRecursive("lawrence"));
}());