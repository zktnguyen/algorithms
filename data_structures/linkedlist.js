(function(){
  'use strict';
  function Node(data){
    this.data = data;
    this.next = null;
  }

  function LinkedList(){
    this.head = null;
    this.size = 0;
    this.add = function(data){
      var node = new Node(data);
      if (!this.head){
        this.head = node;
      }
      else {
        var current = this.head;
        while(current.next){
          current = current.next;
        }
        current.next = node;
      }
      this.size++;
    };

    this.remove = function(data){
      var previous, current = this.head;
      if (current.data === data){
        this.head = current.next;
      }
      else {
        while(current.data !== data){
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.size--;
    };

    this.search = function(data){
      if (this.head.data === data){
        return this.head;
      }
      else {
        var current = this.head;
        while(current.data !== data){
          current = current.next;
        }
        return current;
      }
      return null;
    };

    this.removeAt = function(index){

    };

    this.addAt = function(data, index){

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