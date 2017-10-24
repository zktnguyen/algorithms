public class SetOfStacks {
  ArrayList<MyStack> stacks;
  int size;
  SetOfStacks() {
    stacks = new ArrayList<MyStack>();
    size = 0;
  }
  
  private MyStack getLastStack() {
    if (size == 0) {
      return null;
    }
    return stacks.get(size - 1);
  }

  public void push(int value){
    MyStack last = getLastStack();
    if (last == null || last.full()) {
      MyStack newStack = new MyStack();
      newStack.push(value);
      stacks.add(newStack);
    }
    else {
      last.push(value);
    }
  }

  public int pop() {
    MyStack last = getLastStack();
    int popValue = -1;
    if (last != null) {
      popValue = last.pop();
      if (last.isEmpty()) {
        stacks.remove(size - 1);
      }
    }

    return popValue;
  }

  public int popAt(int index) {
    int popValue = -1;
    if (index >= 0 && index < size) {
      MyStack stackAt = stacks.get(index);
      popValue = stackAt.pop();
      if (stacks.get(index + 1) != null) {

      }
    }

    return popValue;
  }
}