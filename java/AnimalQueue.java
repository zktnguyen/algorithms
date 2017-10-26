import java.util.*;

public class AnimalQueue {
  class Animal {
    int order;

    public Animal () {

    }

    public void setOrder(int o) {
      order = o;
    }

    public int getOrder() {
      return order;
    }

    public boolean olderThan(Animal a) {
      return this.order == a.getOrder();
    }
  }

  class Cat extends Animal {
    public Cat () {

    }
  }

  class Dog extends Animal {
    public Dog () {

    }
  }

  LinkedList<Dog> dogQueue;
  LinkedList<Cat> catQueue;
  int order;
  // create two queues, one for Cats, one for Dogs
  // enqueue: if cat, add to cat Q, else add to dog Q
  // dequeue: if cat, remove from cat Q, else remove from dog Q
  // dequeueAny: marker flag of which one is in front of both queues.
  public AnimalQueue() {
    LinkedList<Dog> dogQueue = new LinkedList<Dog>();
    LinkedList<Cat> catQueue = new LinkedList<Cat>();
    order = 0;
  }

  public void enqueue(Animal a) {
    a.setOrder(order);
    order++;

    if (a instanceof Dog) dogQueue.add((Dog) a);
    else if (a instanceof Cat) catQueue.add((Cat) a);
  }

  public Animal dequeueAny() {

    if (dogQueue.isEmpty()) 
      return dequeueCat();
    else if (catQueue.isEmpty()) 
      return dequeueDog();
    Dog dog = dogQueue.peek();
    Cat cat = catQueue.peek();

    if (dog.olderThan(cat)) 
      return dequeueDog();
    else if (cat.olderThan(dog))
      return dequeueCat();
    return null;
  }

  public Dog dequeueDog() {
    return dogQueue.remove();
  }

  public Cat dequeueCat() {
    return catQueue.remove();
  }
}