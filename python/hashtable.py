def HashTable:
  def __init__(self, init_size):
    self.size = init_size
    self.keys = [None] * self.size
    self.values = [None] * self.size
  
  def put(self, itemKey, itemValue):
    hashValue = self.hash(itemKey, len(self.keys))

    # If the hashTable does not have this hashValue, insert.
    if self.keys[hashValue] == None:
      self.keys[hashValue] = itemKey
      self.values[hashValue] = itemValue
    
    #If the hashTable has the hashValue already.
    else:
      # If the hashValue is being updated.
      if self.keys[hashValue] == key:
        self.values[hashValue] = itemValue
      else:
        #Collisions: linear probing
        nextKey = self.rehash(hashValue, len(self.keys))
        #Search for a key slot that is either empty or equals to the key.
        while self.keys[nextKey] != None and self.keys[nextKey] != key:
          nextKey = self.rehash(hashValue, len(self.keys))
        #If it is an empty key slot, insert the key and value
        if self.keys[nextKey] == None:
          self.keys[nextKey] = itemKey
          self.values[nextKey] = itemValue
        #Else update the value
        else:
          self.values[nextKey] = itemValue
    
    # Simple hash function
    def hash(self, key, size):
      return key % size

    # Simple rehash function
    def rehash(self, key, size):
      return (key + 1) % size

    def get(self, key):
      
      initialHashValue = self.hash(key, len(self.keys))

      hashValue = initialHashValue
      while self.keys[hashValue] != None:
        if self.keys[hashValue] == key:
          return self.values[hashValue]

        else:
          hashValue = self.rehash(hashValue, len(self.keys))
          if hashValue == initialHashValue:
            break

      return None

    def __getitem__(self, key):
      return self.get(key)

    def __setitem__(self, key, data):
      return self.put(key, data)

    