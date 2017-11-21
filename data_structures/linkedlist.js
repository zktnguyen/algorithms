(function(){
  'use strict';
  // construct the Node object
  function Node(data){
    this.data = data;
    this.next = null;
  }
  // Linked list object
  function LinkedList(){
    // head initialized to null, an empty linked list. size = 0
    this.head = null;
    this.size = 0;

    // add to the linked list a new node, pass in data
    this.add = function(data){
      // create a new node with the data.
      var node = new Node(data);
      // insert it at the head if there is no head.
      if (!this.head){
        this.head = node;
      }
      // traverse through the linked list if there is a head.
      else {
        var current = this.head;
        while(current.next){
          current = current.next;
        }
        current.next = node;
      }
      // increase our size.
      this.size++;
    };

    // remove function, matches node with data
    this.remove = function(data){
      // keep track of a previous node.
      var previous, current = this.head;
      // if we already reached the matching node, re-assign head.
      if (current.data === data){
        this.head = current.next;
      }
      // otherwise, you will have to search for matching node and reassign its place
      else {
        while(current.data !== data){
          previous = current;
          current = current.next;
        }
        // this essentially removes the node from the linked list
        previous.next = current.next;
      }
      // decrease the linked list size when you remove a node.
      this.size--;
    };

    // look for the node with matching data.
    this.search = function(data){
      // return the head if head matches.
      if (this.head.data === data){
        return this.head;
      }
      else {
        // otherwise, traverse through until you find the matching node.
        var current = this.head;
        while(current.data !== data){
          current = current.next;
        }
        // return matching node.
        return current;
      }
    };

    this.removeAt = function(index){
      if (index >= this.size) {
        return null;
      }

      else {
        var currentIndex = 0;
        var previousNode, currentNode = this.head;
        while(currentIndex < index){
          previousNode = currentNode;
          currentNode = currentNode.next;
          currentIndex++;
        }
        previousNode.next = currentNode.next;
      }
    };

    this.addAt = function(data, index){
      var newNode = new Node(data);
      if (index >= this.size) {
        index = this.size - 1;
      }
      var currentIndex = 0;
      var previousNode, currentNode = this.head;
      while(currentIndex < index){
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }
      previousNode.next = newNode;
      newNode.next = currentNode;
    };

    function reverse(list){
      if (!list.head) return null;
      var current = list.head;
      var previous = null;
      var next = list.head;
      var newHead = list.head;
      while (current){
        next = current.next; // keep reference to next node
        current.next = previous; // switch pointer direction
        previous = current;
        if (next){
          newHead = next;
        }
        current = next; // continue process
      }
      return newHead;
    }

    this.print = function(){
      var arr = [];
      var current = this.head;
      while(current){
        arr.push(current.data);
        current = current.next;
      }
      return arr;
    };
  }

  var list = new LinkedList();
  list.add(2);
  list.add(5);
  list.add(10);
  console.log(list.print());
  list.add(7);
  list.add(11);
  console.log(list.print());
  list.remove(10);
  console.log(list.print());
  
}());