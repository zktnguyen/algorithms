(function(){
  'use strict';

  function Stack(){
    var storage = [];
    var size = 0;
    var min = [Number.MAX_VALUE];

    this.push = function(data){
      storage.push(data);
      if (data < min[size]){
        size++;
        min[size] = data;
      }
      else {
        size++;
        min[size] = min[size-1];
      }
      
    };

    this.pop = function(){
      var value;
      if (size <= 0){
        return null;
      }
      value = storage.splice(-1,1)[0];
      size--;
      min.splice(-1, 1);
      return value;
    };

    this.peek = function(){
      return storage[size-1];
    };

    this.getMinimum = function(){
      return min[size];
    };

    this.print = function(){
      console.log(storage);
    };

    this.isEmpty = function(){
      return size === 0;
    }
  }

  var stk = new Stack();
  stk.push(5);
  stk.push(10);
  stk.push(11);
  stk.push(10);
  stk.print();
  console.log(stk.peek(), stk.getMinimum());
  stk.push(1);
  console.log(stk.peek(), stk.getMinimum());
  console.log(stk.pop());

  function MyQueue(){
    var inbox = new Stack();
    var outbox = new Stack();
    var size = 0;

    this.enqueue = function(data){
      inbox.push(data);
      size++;
    };

    this.dequeue = function(){
      if (this.isEmpty()){
        return null;
      }
      if (!outbox.isEmpty()){
        return outbox.pop();
      }
      while(!inbox.isEmpty()){
        outbox.push(inbox.pop());
      }
      var value = outbox.pop();
      size--;
      return value;
    };

    this.front = function(){
      if (this.isEmpty()){
        return null;
      }
      if (!outbox.isEmpty()){
        return outbox.peek();
      }
      while(!inbox.isEmpty()){
        outbox.push(inbox.pop());
      }
      return outbox.peek();
    };

    this.isEmpty = function(){
      return size === 0;
    };

    this.print = function(){
      inbox.print();
      outbox.print();
    };

  }

  var q = new MyQueue();
  q.enqueue(30);
  q.enqueue(10);
  q.enqueue(5);
  console.log(q.dequeue());
  q.enqueue(22);
  q.enqueue(13);
  console.log(q.dequeue());
}());