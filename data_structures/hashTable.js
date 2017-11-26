(function(){
  'use strict';
  function hash(str, bucketSize){
    var len = str.length;
    var key = 0;
    for (var i = 0; i < len; i++){
      key += str.charCodeAt(i);
    }
    return key % bucketSize;
  }

  
  function HashTable(size){
    var bucket = [];
    this.size = size;

    this.add = function(key, value){
      var code = hash(key, this.size);

      if (bucket[code] === undefined){
        bucket[code] = [ [key, value] ];
      }
      else {
        var added = false;
        for (var i = 0; i < bucket[code].length; i++){
          if (bucket[code][i][0] === key){
            bucket[code][i][1] = value;
            added = true;
          }
        }
        if (!added){
          bucket[code].push([key, value]);
        }
      }
    };

    this.remove = function(key){
      var code = hash(key, this.size);
      if (bucket[code] === undefined){
        return;
      } 
      // if there are no collisions, the key must match
      else if (bucket[code].length === 1 && bucket[code][0][0] === key){
        delete bucket[code];
      }
      else {
        for (var i = 0; i < bucket[code].length; i++){
          if (bucket[code][i][0] === key){
            delete bucket[code][i];
          }
        }
      }
    };

    this.lookup = function(key){
      var code = hash(key, this.size);
      if (bucket[code] === undefined){
        return undefined;
      }
      if (bucket[code].length === 1 && bucket[code][0][0] === key){
        return bucket[code][0][1];
      }
      else {
        for (var i = 0 ; i < bucket[code].length; i++){
          if (bucket[code][i][0] === key){
            return bucket[code][i][1];
          }
        }
      }
    };

  }

  var table = new HashTable(10);
  table.add('Car', '1984 Lexus');
  table.add('House', 'Condo');
  table.add('Name', 'Brandon');
  table.add('Kim', '5104279444');
  table.add('Car', '1329 Lexus');
    console.log(table.lookup('Car'));

  table.remove('Car');
    console.log(table.lookup('Car'));

}());
