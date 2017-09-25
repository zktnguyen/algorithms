function firstNotRepeatingCharacter(s) {
  var arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var chars = [];
  for (var i = 0; i < s.length; i++){
      if(chars.indexOf(s[i]) === -1){
          chars.push(s[i]);
          arr[chars.length - 1]++;
      }
      else {
          var idx = chars.indexOf(s[i]);
          arr[idx]++;
      }
  }
  
  for (var i = 0 ; i < arr.length; i++){
      if (arr[i] === 1){
          return chars[i];
      }
  }
  return '_';
}
