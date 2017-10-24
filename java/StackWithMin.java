public class StackWithMin extends MyStack {
  MyStack minStack;
  StackWithMin(){
    minStack = new MyStack();
  }

  public int min() {
    if (!minStack.isEmpty()) {
      return minStack.peek();
    }

    return Integer.MAX_VALUE;
  }

  public void push(int value) {
    if (value <= min()) {
      minStack.push(value);
    }
    super.push(value);
  }

  public int pop() {
    int popValue = super.pop();
    if (popValue == min()) {
      minStack.pop();
    }

    return popValue;
  }
}
