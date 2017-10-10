class ListNode:
  def __init__(self, value):
    self.value = value
    self.next = None

def removeDuplicates(head):
  if head == None:
    return None
  if head.next == None:
    return head

  current = head.next
  prev = head
  list_values = dict()
  list_values[prev.value] = 1
  while current != None:
    if list_values.has_key(current.value):
      prev.next = current.next
    else:
      list_values[current.value] = 1
      prev = prev.next
    current = current.next
  return head

head = ListNode(0)
head.next = ListNode(1)
head.next.next = ListNode(1)
head.next.next.next = ListNode(2)
head.next.next.next.next = ListNode(1)

def printList(head):
  if head == None:
    return None
  print(head.value)
  return printList(head.next)

printList(head)
printList(removeDuplicates(head))