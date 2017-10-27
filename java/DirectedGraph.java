import java.util.LinkedList;
import java.util.HashMap;

public class DirectedGraph {

  
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

  public DirectedGraph() {
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
    return hasPathDFS(s, d, visited);
  }

  public boolean DFS(Node s, Node d, HashSet<Integer> visited) {

    return false;
  }

  public boolean BFS(int source, int destination) {
    
    return false;
  }

  public boolean BFS(Node s, Node d, HashSet<Integer> visited) {
    
    return false;
  }

  public static void main(String[] args) {
    System.out.println("New graph!");
  }
}