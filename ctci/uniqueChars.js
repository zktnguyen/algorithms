(function(){
  'use strict';
  /**
   * 1.1 Implement an algorithm to determine if a string has all unique characters. What
if you cannot use additional data structures?
   */
  function uniqueChars(string){

    // create an object that records unique characters
    // if any characters have more than 1 characters, we can return false
    // if we complete the process without interrupting, we have a string with all unique characters

    var chars = {}, len = string.length;
    if (len < 2){
      return true;
    }

    for (var i = 0; i < len; i++){
      var ch = str.charAt(i);
      if (chars[ch] === undefined){
        chars[ch] = 1;
      }
      else {
        return false;
      }
    }
    return true;
  }

  console.log(uniqueChars('racecar'));
}());