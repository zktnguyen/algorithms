class Node:
  def __init__(self, value):
    self.value = value
    self.left = None
    self.right = None
  
  def print_node(self):
    if self.left != None:
      self.left.print_node()
    print(self.value)
    if self.right != None:
      self.right.print_node()

class BinarySearchTree:
  def __init__(self):
    self.root = None
  
  def set_root(self, value):
    self.root = Node(value)

  def get_root(self):
    return self.root
  def insert(self, value):
    if self.root == None:
      self.set_root(value)
    else:
      self.insert_node(self.root, value)

  def insert_node(self, current_node, value):
    newNode = Node(value)
    if newNode.value <= current_node.value:
      if current_node.left != None:
        self.insert_node(current_node.left, value)
      else:
        current_node.left = newNode
    elif newNode.value > current_node.value:
      if current_node.right != None:
        self.insert_node(current_node.right, value)
      else:
        current_node.right = newNode

  def find(self, value):
    return self.find_node(self.root, value)
  
  def find_node(self, current_node, value):
    if current_node == None:
      return None
    elif value == current_node.value:
      return current_node
    elif value <= current_node.value:
      return self.find_node(current_node.left, value)
    else:
      return self.find_node(current_node.right, value)
      

  

  def print_tree(self):
    self.root.print_node()

def find_max_height(node):
  if node == None:
    return 0
    
  left_height = find_max_height(node.left)
  right_height = find_max_height(node.right)

  return max(left_height, right_height) + 1

def find_min_height(node):
  if node == None:
    return 0
  left_height = find_min_height(node.left)
  right_height = find_min_height(node.right)

  return min(left_height, right_height) + 1
  

B = BinarySearchTree()
B.set_root(5)
B.print_tree()
B.insert(3)
B.insert(7)
B.insert(8)
print(find_max_height(B.get_root()))
print(find_min_height(B.get_root()))
B.print_tree()