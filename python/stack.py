class Stack:
  def __init__(self):
    self.items = []
  
  def isEmpty(self):
    return self.items == []
  
  def push(self, item):
    self.items.append(item)
  
  def pop(self):
    return self.items.pop()

  def peek(self):
    return self.items[len(self.items) - 1]

  def size(self):
    return len(self.items)

def infixToPostfix(expr):
  prec = { '*' : 3, '/' : 3, '+' : 2, '-' : 2, '(' : 1}
  opStack = Stack()
  postfixList = []
  tokenExpr = expr.split()

  for token in tokenExpr:
    if token in "ABCDEFGHIJKLMNOPQRSTUVWXYZ" or token in "0123456789":
      postfixList.append(token)
    elif token == '(':
      opStack.push(token)
    elif token == ')':
      op = opStack.pop()
      while op != '(':
        postfixList.append(op)
        topToken = opStack.pop()
    else:
      while (not opStack.isEmpty()) and (prec[opStack.peek()] >= prec[token]):
        postfixList.append(opStack.pop())
      opStack.push(token)
    
  while not opStack.isEmpty():
    postfixList.append(opStack.pop())
    
  return " ".join(postfixList)

print(infixToPostfix("A * B + C * D"))

