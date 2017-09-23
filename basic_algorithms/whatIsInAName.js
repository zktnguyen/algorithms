(function(){
  'use strict';
  function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var keys = Object.keys(source);
    for (var i =0 ; i < collection.length; i++){
      var add = 0;
      for (var j = 0; j < keys.length; j++){
        
        if (collection[i].hasOwnProperty(keys[j])){
          if (collection[i][keys[j]] === source[keys[j]] && arr.indexOf(collection[i]) === -1){
            add++;
          }
        }
      }
      if (add === j){
        arr.push(collection[i]);
      }
      
    }
    // Only change code above this line
    return arr;
  }

}());