public class MyStack {
  class Node {
    int value;
    Node next;

    Node(int value) {
      this.value = value;
      this.next = null;
    }
  }
  Node top;
  int size;
  
  MyStack() {
    top = null;
    size = 0;
  }

  public void push(int value) {
    Node newNode = new Node(value);
    if (top == null) {
      newNode.next = null;
    }
    else {
      newNode.next = top;
    }
    top = newNode;
    size++;
  }

  public int pop() {
    Node popNode = top;

    if (popNode != null){
      top = popNode.next;
      size--;
      return popNode.value;
    }
    return -1000;
  }


  public int peek() {
    if (!this.isEmpty()){
      return top.value;
    }

    return -1000;
  }

  public boolean isEmpty() {
    return size == 0;
  }


}