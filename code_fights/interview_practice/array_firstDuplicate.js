function firstDuplicate(a) {
  // loop through array to check if there is a duplicate value
  // duplicate value is indicated
  var dict = {};
  
  for (var i = 0; i < a.length; i++){
      if (dict.hasOwnProperty(a[i])){
          return a[i];
      }
      else {
          dict[a[i]] = 0;
      }
  }
  
  return -1;
}
