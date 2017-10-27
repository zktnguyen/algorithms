import java.util.LinkedList;
import java.util.HashMap;
import java.util.HashSet;

public class UndirectedGraph {

  
  class Node {
    int value;
    LinkedList<Node> adjList = new LinkedList<Node>();

    public Node(int value) {
      this.value = value;
    }

    public void addEdge(Node dest) {
      adjList.addLast(dest);
    }

    public int getValue() {
      return value;
    }

    public void setValue(int value) { 
      this.value = value;
    }

  }


  HashMap<Integer, Node> vertices;

  public UndirectedGraph() {
    HashMap<Integer, Node> vertices = new HashMap<Integer, Node>();
  }

  private Node getNode(int val) {
    return vertices.get(val);
  }

  public void addEdge(int source, int destination) {
    Node s = getNode(source);
    Node d = getNode(destination);
    s.addEdge(d);
  }

  public boolean DFS(int source, int destination) {
    Node s = getNode(source);
    Node d = getNode(destination);
    HashSet<Integer> visited = new HashSet<Integer>();
    return DFS(s, d, visited);
  }

  public boolean DFS(Node s, Node d, HashSet<Integer> visited) {
    if (visited.contains(s.value)) return false;
    visited.add(s.value);
    if (s.equals(d)) return true;
    else {
      for (Node v : s.adjList) {
          if (DFS(v, d, visited)) {
            return true;
          }
      }
    }
    return false;
  }

  public boolean BFS(Node source, Node destination) {
    LinkedList<Node> q = new LinkedList<Node>();
    HashSet<Integer> visited = new HashSet<Integer>();
    q.add(source);
    while(!q.isEmpty()) {
      Node current = q.remove();
      if (current.equals(destination)) return true;

      if (visited.contains(current.value)) continue;

      visited.add(current.value);
      for (Node v : current.adjList) {
        q.add(v);
      }
    }
    return false;
  }

  public static void main(String[] args) {
    System.out.println("New graph!");
  }
}