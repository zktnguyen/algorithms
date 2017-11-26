(function () {
  'use strict';
  function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
  function BST(){
    this.root = null;
    this.getRoot = function(){
      return this.root;
    };
    this.add = function(data){
      // check if there is a root
      // if not, please make this node the root.
      var current = this.root;
      
      if (!current){
        this.root = new Node(data);
        return;
      }

      
      // else, search through the tree for the proper placement
      else {
        var newNode = new Node(data);
        // Go down the tree, check left and right depending on value
        var searchFor = function(node){
          // if the current node is null, this is where it should go
          if (data < node.value){
            if (!node.left){
              node.left = newNode;
            }
            else {
              return searchFor(node.left);
            }
          }
          // recursively call the search tree to go down right-subtree
          else {
            if (!node.right){
              node.right = newNode;
            }
            else {
              return searchFor(node.right);
            }
          }
        };
        return searchFor(current);
      }
    };
    
    this.remove = function(data){
      // if it's the root, please reassign the root....
      // else check for the node to switch
      var removeAt = function(node, nodeData){
        // if Root is null, return null
        if(node === null){
          return node;
        }
        // otherwise, if the root is the value we are matching
        if (nodeData === node.value){
          // is a leaf
          if (node.left === null && node.right === null){
            return null;
          }
          // 1 child
          if (!node.left){
            return node.right;
          }
          if (!node.right){
            return node.left;
          }
          // 2 children means we have to take the root's successor
          // which is the left most node on the right tree.
          var tempNode = node.right;
          while (tempNode.left){
            tempNode = tempNode.left;
          }
          node.value = tempNode.value;
          node.right = removeAt(node.right, tempNode.value);
        }
        // Look to the left, recursive call
        else if (nodeData < node.value){
          node.left = removeAt(node.left, nodeData);
          return node;
        }
        // Look to the right, recursive call
        else {
          node.right = removeAt(node.right, nodeData);
          return node;
        }

      };
      this.root = removeAt(this.root, data);
    };

    // This function traverses down the left subtree of a binary tree.
    // As a result, it will return the minimum value that is the leftmost leaf.
    this.findMinValue = function(){
      if (!this.root){
        return null;
      }
      var current = this.root;
      while(current.left){
        current = current.left;
      }
      return current.value;
    };

    // This function traverses down the right subtree of a binary tree.
    // As a result, ti will return the maximum value that is the rightmost leaf.
    this.findMaxValue = function(){
      if (!this.root){
        return null;
      }
      var current = this.root;
      while(current.right){
        current = current.right;
      }
      return current.value;
    };
    
    // This will return the minimum height of the tree.
    this.findMinHeight = function(){
      var minHeight = function(node){
        if (!node){
          return 0;
        }
        var left = minHeight(node.left); // either 1 or 0
        var right = minHeight(node.right);

        return Math.min(left, right) + 1;
      };
      return minHeight(this.root);
    };

    // This will return the maximum height of the tree.
    this.findMaxHeight = function(){
      var maxHeight = function(node){
        if (!node){
          return 0;
        }
        var left = maxHeight(node.left);
        var right = maxHeight(node.right);

        return Math.max(left, right) + 1;
      };
      return maxHeight(this.root);
    };

    // A balanced tree is defined as a tree with a minimum height 
    // that is at most 1 smaller than the maximum height.
    this.isBalanced = function(){
      return this.findMaxHeight <= this.findMinHeight + 1;
    };

    // Binary search tree is defined as a tree where for each node, its value is less than its right child,
    // and the left child is less than the node's value.
    this.isBinarySearch = function(){
      return isBST(this.root, Number.MIN_VALUE, Number.MAX_VALUE);
    };
  }
  var findMaxValue = function(root){
      if (!root){
        return null;
      }
      var current = root;
      while(current.right){
        current = current.right;
      }
      return current.value;
    };
  var findMinValue = function(root){
      if (!root){
        return null;
      }
      var current = root;
      while(current.left){
        current = current.left;
      }
      return current.value;
  };

  function inOrder(root){
    if (root){
      inOrder(root.left);
      console.log(root.value);
      inOrder(root.right);
    }
  }

  function preOrder(root){
    if (root){
      console.log(root.value);
      preOrder(root.left);
      preOrder(root.right);
    }
  }
  
  function postOrder(root){
    if (root){
      postOrder(root.left);
      postOrder(root.right);
      console.log(root.value);
    }
  }

  function BFS(root){
    var q = [];
    var temp = root;
    while(temp){
      console.log(temp.value);
      if (temp.left){
        q.push(temp.left);
      }
      if (temp.right){
        q.push(temp.right);
      }
      temp = q.shift();
    }
  }
  function findNext(root, node){
    if (!root) return null;
    if (root.value > node){
      // this is if parent is the next node and node is a leaf
      if (node === findMaxValue(root.left)){
        return root.value;
      }
      if (root.left.value === node && !root.left.left && !root.left.right){
        return root.value;
      }
      // return left tree
      else {
        return findNext(root.left, node);

      }
    }

    if (root.value === node){
      if (root.right){
        var temp = root.right;
        while(temp.left){
          temp = temp.left;
        }
        return temp.value;
      }
      
    }

    
    else {
      return findNext(root.right, node);
    }
  }

  function isBST(root, min, max){
    if (root === null){
      return true;
    }
    if (root.value < min || root.value > max){
      return false;
    }

    return isBST(root.left, min, root.value - 1) 
    && isBST(root.right, root.value + 1, max);
  }
  // Test
  var bst = new BST();
  bst.add(9);
  bst.add(4);
  bst.add(17);
  bst.add(3);
  bst.add(6);
  bst.add(22);
  bst.add(5);
  bst.add(7);
  bst.add(20);
  bst.add(10);
  console.log("inOrder");
  inOrder(bst.getRoot());
  console.log("inOrder after remove 5");
  inOrder(bst.getRoot());
  console.log("Min: " + bst.findMinValue());
  console.log("Max: " + bst.findMaxValue());
  console.log("Min Height: " + bst.findMinHeight());
  console.log("Max Height: " + bst.findMaxHeight());
  console.log(bst.isBalanced());
  console.log(bst.isBinarySearch());
  console.log(findNext(bst.getRoot(), 10));

  // console.log("levelOrder");
  // BFS(bst.getRoot());
  // console.log("preOrder");
  // preOrder(bst.getRoot());
  // console.log("postOrder");
  // postOrder(bst.getRoot());
}());