class Node:
  def __init__(self, value):
    self.value = value
    self.next = None
  
  def getValue(self):
    return self.value

  def getNext(self):
    return self.next 
  
  def setValue(self, newVal):
    self.value = newVal

  def setNext(self, newNext):
    self.next = newNext

class UnorderedList:
  def __init__(self):
    self.head = None
  
  def isEmpty(self):
    return self.head == None

  def add(self, item):
    temp = Node(item)
    temp.setNext(self.head)
    self.head = temp
  
  def size(self):
    current = self.head
    length = 0
    while current != None:
      count = count + 1
      current = current.getNext()
    return count

  def search(self, item):
    current = self.head
    
    while current != None:
      if current.getValue() == item:
        return True
      else:
        current = current.getNext()
    return False

  def remove(self, item):
    current = self.head
    previous = None
    found = False
    while not found:
      if current.getValue() == item:
        found = True
      else:
        previous = current
        current = current.getNext()

    if previous == None:
      self.head = current.getNext()
    
    else:
      previous.setNext(current.getNext())
  