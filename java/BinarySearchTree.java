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

    else if (value > root.value){
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

  public int getHeight() {
    return getMaxHeight(root);
  }

  private int getMaxHeight(Node root) {
    if (root == null) return 0;
    int left = getMaxHeight(root.left);
    int right = getMaxHeight(root.right);

    return Math.max(left, right) + 1;
  }

  private int getMinHeight(Node root) {
    if (root == null) return 0;
    int left = getMinHeight(root.left);
    int right = getMinHeight(root.right);

    return Math.min(left, right) + 1;
  }

  public boolean isBalanced() {
    return isBalanced(root);
  }

  private boolean isBalanced(Node root) {
    System.out.println(getMaxHeight(root));
    System.out.println(getMinHeight(root));
    return getMaxHeight(root) <= getMinHeight(root) + 1;
  }
  
  public boolean isBinarySearch() {
    return isBinarySearch(root, Integer.MIN_VALUE, Integer.MAX_VALUE);
  }

  private boolean isBinarySearch(Node root, int min, int max) {
    if (root == null) return true;
    if (root.value <= min || root.value > max) {
      return false;
    }

    return isBinarySearch(root.left, min, root.value) && isBinarySearch(root.right, root.value, max);
  }

  public void inOrder(Node root) {
    if (root.left != null) inOrder(root.left);
    System.out.println(root.value);
    if (root.right != null) inOrder(root.right);
  }

  public Node createBinaryTree(int[] array, int left, int right) {
    // perform binary search, place mid as the root.
    if (left < right) {
      int mid = (left + right) / 2;
      Node midNode = new Node(array[mid]);
      createBinaryTree(array, left, mid - 1);
      createBinaryTree(array, mid + 1, right);
      return midNode;
    }
    return null;
  }

  public Node createBinaryTree(int[] array) {
    return createBinaryTree(array, 0, array.length - 1);
  }

  public void preOrder(Node root) {
    System.out.println(root.value);
    if (root.left != null) preOrder(root.left);
    if (root.right != null) preOrder(root.right);
  }

  public void postOrder(Node root) {
    if (root.left != null) postOrder(root.left);
    if (root.right != null) postOrder(root.right);
    System.out.println(root.value);
  }

  public boolean containsSubtree(Node t1, Node t2) {
    // search through t1 to see if there exists
    // node such that it equals t2.root and
    // left subtree equals t2.left, right subtree
    // equals t2.right
    // if t2 is null, t1 contains t2, true!
    if (t2 == null) return true;
    return isSubtree(t1, t2);
  }

  public boolean isSameTree(Node t1, Node t2) {
    // Initially called once we find the same node in t1 as t2.root
    if (t1 == null && t2 == null) return true;
    if (t1 == null || t2 == null) return false;


    // if they do not match, return false
    if (t1.value != t2.value) return false;

    // check if the left and right subtrees match
    return isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right);
  }
  
  public boolean isSubtree(Node t1, Node t2) {

    // if t1 is null but t2 isn't, t2 is not subtree
    if (t1 == null) return false;

    // if we find a node that matches t2
    // check the left and right subtree
    if (t1.value == t2.value) return isSameTree(t1, t2);

    // keep searching down t1 for matching node
    return isSubtree(t1.left, t2) || isSubtree(t1.right, t2);
  }


  public static void main(String[] args) {
    BinarySearchTree tree = new BinarySearchTree();

    tree.insert(30);
    tree.insert(35);
    tree.insert(10);
    tree.insert(40);
    tree.insert(33);
    tree.insert(7);
    tree.insert(11);
    tree.insert(50);
    tree.insert(43);
    tree.inOrder(tree.root);
    System.out.println("preorder");
    tree.preOrder(tree.root);
    System.out.println("postOrder");
    tree.postOrder(tree.root);
    System.out.println("Is binary search? " + tree.isBinarySearch());
    System.out.println("Is balanced? " + tree.isBalanced());
  }

}