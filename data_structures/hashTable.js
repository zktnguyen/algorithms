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
    this.bucket = [];
    this.size = size;
    this.count = 0;
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

      if (this.count > this.size * 0.75) {
        this.resize(this.size * 2);
      }
      this.count++;
    };

    // Removes the matching key, value pair from the table.
    // Returns true if there is a matching key and value pair.
    this.remove = function(key){
      var code = hash(key, this.size);
      // There is no key, value pair!
      if (bucket[code] === undefined){
        return false;
      } 
      // if there are no collisions, the key must match
      else if (bucket[code].length === 1 && bucket[code][0][0] === key){
        delete bucket[code];
        this.count--;
        return true;
      }
      else {
        for (var i = 0; i < bucket[code].length; i++){
          if (bucket[code][i][0] === key){
            var tempBucket = [...bucket[code].slice(0, i), ...bucket[code].slice(i+1)];
            bucket[code] = tempBucket;
            this.count--;
            return true;
          }
        }
      }
      if (this.count < this.size * 0.25) {
        this.resize(this.size / 2);
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

    this.resize = function(newSize) {
      var oldBucket = this.bucket;
      
      // reset this hash table instance's variables.
      this.size = newSize;
      this.bucket = [];
      this.count = 0;
      // This goes through the whole bucket, and i represents the hash code.
      for (var i = 0 ; i < oldBucketSize.length; i++) {
        // Iterate through the individual buckets (there may be collisions).
        for (var j = 0; j < oldBucketSize[i].length; j++) {
          // Extract the key and value
          var key = oldBucket[i][j][0],
            value = oldBucket[i][j][1];
          // Add into new bucket.
          this.add(key, value);
        }
      }
    }

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
