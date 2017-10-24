public class MyQueue {
  MyStack in;
  MyStack out;

  MyQueue() {
    in = new MyStack();
    out = new MyStack();
  }

  public void enqueue(int value) {
    in.push(value);
  }

  public int dequeue() {
    while(!in.isEmpty()) {
      out.push(in.pop());
    }

    return out.pop();
  }

  public boolean isEmpty() {
    return in.isEmpty() && out.isEmpty();
  }
  
}