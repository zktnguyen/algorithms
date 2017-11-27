(function(){
  'use strict';
  // A hash function: takes a key and bucket size
  // creates a hash code (fairly simple)
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

    // This is the bucket version of a Hash Table, where key, value pairs
    // with the same hash code are added into the same
    // entry in the table in an array fashion.
    // Adds a key, value pair to the hash table bucket.
    this.add = function(key, value){
      var code = hash(key, this.size);
      // Add the pair as is if there are no key, value pairs existing
      if (bucket[code] === undefined){
        bucket[code] = [ [key, value] ];
      }
      else {
        // Otherwise, let's go through the bucket to see if we have the key
        // and update the value
        var added = false;
        for (var i = 0; i < bucket[code].length; i++){
          if (bucket[code][i][0] === key){
            bucket[code][i][1] = value;
            added = true;
          }
        }
        // If the key does not exist in the bucket, add to the end of the bucket entry
        if (!added){
          bucket[code].push([key, value]);
        }
      }
    };

    // Removes the matching key, value pair from the table.
    this.remove = function(key){
      var code = hash(key, this.size);
      // There is no key, value pair!
      if (bucket[code] === undefined){
        return false;
      } 
      // if there are no collisions, the key must match
      else if (bucket[code].length === 1 && bucket[code][0][0] === key){
        delete bucket[code];
        return true;
      }
      else {
        for (var i = 0; i < bucket[code].length; i++){
          if (bucket[code][i][0] === key){
            var tempBucket = [...bucket[code].slice(0, i), ...bucket[code].slice(i+1)];
            bucket[code] = tempBucket;
            return true;
          }
        }
      }
      return false;
    };

    this.lookup = function(key){
      var code = hash(key, this.size);
      if (bucket[code] === undefined){
        return 'Key not found';
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
  console.log(table.remove('no'));
  console.log(table.lookup('House'));
  table.add('Name', 'Brandon');
  table.add('Kim', '5104279444');
  console.log(table.remove('Name'));
  table.add('Car', '1329 Lexus');
    console.log(table.lookup('Car'));
  console.log(table.remove('Car'));
    console.log(table.lookup('Car'));
    console.log(table.lookup('Kim'));
  

}());
