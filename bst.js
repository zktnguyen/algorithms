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
      var removeAt = function(node, data){
        if(node === null){
          return node;
        }
        if (data === node.value){
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
          // 2 children
          var tempNode = node.right;
          while (tempNode.left){
            tempNode = tempNode.left;
          }
          node.value = temp.left;
          node.right = removeAt(node.right, tempNode.value);
        }
        else if (data < node.value){
          node.left = removeAt(node.left, data);
          return node;
        }
        else {
          node.right = removeAt(node.right, data);
          return node;
        }

      };
      this.root = removeAt(this.root, data);
    };

    
    
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
    
    this.findMinHeight = function(){
      var minHeight = function(node){
        if (!node){
          return 0;
        }
        var left = minHeight(node.left);
        var right = minHeight(node.right);

        return Math.min(left, right) + 1;
      };
      return minHeight(this.root);
    };

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

    this.isBalanced = function(){
      return this.findMaxHeight - 1 <= this.findMinHeight;
    };

    this.isBinarySearch = function(){
      
    };
  }
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
  bst.remove(5);
  console.log("inOrder after remove 5");
  inOrder(bst.getRoot());
  console.log("Min: " + bst.findMinValue());
  console.log("Max: " + bst.findMaxValue());
  console.log("Min Height: " + bst.findMinHeight());
  console.log("Max Height: " + bst.findMaxHeight());
  console.log(bst.isBalanced());
  // console.log("levelOrder");
  // BFS(bst.getRoot());
  // console.log("preOrder");
  // preOrder(bst.getRoot());
  // console.log("postOrder");
  // postOrder(bst.getRoot());
}());