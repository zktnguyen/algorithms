(function(){
  'use strict';
  /*
  2.1 Write code to remove duplicates from an unsorted linked list.
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?
   */
  function removeDuplicates(head){
    // traverse through linked list
    // add unique elements into an object
    var current = head;
    var previous;
    if (!current) return head;
    else {
      var uniques = {};
      while(current.next){
        previous = current;
        current = current.next;
        if (uniques[current.data] !== undefined){
          previous.next = current.next;
        }
        else {
          uniques[current.data] = 1;
        }
      }
    }
    return head;
  }

  // without temporary buffer

  function removeDuplicatesSort(head){
    // sort the linked list
    // traverse through the list, when u come across a chain (2 or more) duplicate values, remove those chains
    
  }
}());