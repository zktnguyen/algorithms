class binary_heap:
  def __init__(self):
    self.heap_list = [0]
    self.size = 0
  
  def percUp(self, i):
    # this while condition makes sure we percolate upward
    while i // 2 > 0:
      # Replace the parent p if it's larger than node x
      if self.heap_list[i] < self.heap_list[i // 2]:
        temp = self.heap_list[i // 2]
        self.heap_list[i // 2] = self.heap_list[i]
        self.heap_list[i] = temp
      i = i // 2

  def insert(self, item):
    self.heap_list.append(item)
    self.size += 1
    self.percUp(self.size)
  
  def min_child(self, i):
    if i * 2 + 1 > self.size:
      return i * 2
    else:
      if self.heap_list[i * 2] < self.heap_list[i * 2 + 1]:
        return i * 2
      else:
        return i * 2 + 1
    
  def perc_down(self, i):
    while ( i * 2 ) <= self.size:
      min_child = self.min_child(i)
      if self.heap_list[i] > self.heap_list[min_child]:
        temp = self.heap_list[i]
        self.heap_list[i] = self.heap_list[min_child]
        self.heap_list[min_child] = temp
      i = min_child
  
  def del_min(self):
    current_min = self.heap_list[1]
    self.heap_list[1] = self.heap_list[self.size - 1]
    self.size -= 1
    self.heap_list.pop()
    self.perc_down(1) # If it is not the minimum, please move it down
    return current_min
  
  def build_heap(self,arr):
    i = len(arr) // 2
    self.size = len(arr)
    self.heap_list = [0] + arr[:]
    while (i > 0):
        self.perc_down(i)
        i -= 1
