public class BinarySearchTree {
  class Node {
    int value;
    Node left;
    Node right;

    public Node(int val){
      value = val;
      left = right = null;
    }
  }
  Node root;
  public BinarySearchTree(){
    root = null;
  }

  public void insert(int value){
    root = insert(root, value);
  }

  Node insert(Node root, int value){
    if (root == null){
      root = new Node(value);
      return root;
    }

    if (value < root.value){
      root.left = insert(root.left, value);
    }

    else if (value > root.key){
      root.right = insert(root.right, value);
    }
    
    return root;
  }

  public Node search(Node root, int value){
    if (root == null || root.value == value){
      return root;
    }

    if (value < root.value){
      return search(root.left, value);
    }
    return search(root.right, value);
  }

  int minValue(Node root){
    int min = root.value;
    Node current = root;
    while(current.left!=null){
      min = current.left.value;
      current = current.left;
    }

    return min;
  }

  Node minNode(Node root){
    Node current = root;
    while(current.left != null){
      current = current.left;
    }

    return current;
  }

  public void delete(int value){
    root = delete(root, value);
  }

  Node delete(Node root, int value){
    if (root == null) return root;

    if (value < root.value) root.left = delete(root.left, value);
    if (value > root.value) root.right = delete(root.right, value);

    else {
      if (root.left == null) return root.right;
      if (root.right == null) return root.left;

      root.value = minValue(root.right);
      root.right = delete(root.right, root.value);
    }
    return root;
  }

 
}