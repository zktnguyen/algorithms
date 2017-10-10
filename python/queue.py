class Queue:
  def __init__(self):
    self.items = []
  
  def isEmpty(self):
    return self.items == []

  def enqueue(self, item):
    self.items.insert(0, item)
  
  def dequeue(self):
    return self.items.pop()

  def size(self):
    return len(self.items)



def hotPotato(namelist, num):
  simQ = Queue()
  for name in namelist:
    simQ.enqueue(name)
  
  while simQ.size() > 1:
    for i in range(num):
      simQ.enqueue(simQ.dequeue())
    simQ.dequeue()
  
  return simQ.dequeue()