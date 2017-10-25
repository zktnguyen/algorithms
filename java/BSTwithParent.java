public class BSTwithParent {
  class Node {
    int value;
    Node parent, left, right;
  }

  public Node findNextNode(Node root) {
    if (root == null) return null;

    // IF the right tree exists, it will be the left most value
    if (root.right != null) return minValue(root.right);
    // OTHERWISE, if the parent exists, it should be the parent in which
    // the node we are looking for the next node of is on the left.
    else {
      Node parent = root.parent;
      Node current = root;
      while(parent != null && parent.left != current) {
        current = parent;
        parent = parent.parent;
      }

      return parent;
    }
  }

  public Node minValue(Node root) {
    if (root == null) {
      return null;
    }
    while(root.left != null) {
      root = root.left;
    }
    
    return root;
  }
}