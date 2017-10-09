
function IntList(value){
  this.value = value;
  this.next = null;
}

function solution(L){
  // not a linked list, or linked list of 0 length
  if (L === null){
    return 0;
  }
  
  var current = L, count = 0;

  /* iterate through linked list using pointer to each node (current)
  * When the current node is null, the counter should no longer increment
  * as we are no longer looking at a node in the linked list. */
  while(current !== null){
    count++;

    // to move to the next node
    current = current.next;
  }

  // the length is returned
  return count;
}


/* var L = new IntList(1);
L.next = new IntList(2);
L.next.next = new IntList(3);
L.next.next.next = new IntList(4);
console.log((solution(L))); //output = 4
L.next.next.next.next = new IntList(5);
L.next.next.next.next.next = new IntList(6);
L.next.next.next.next.next.next = new IntList(7);
console.log((solution(L))); //output = 7 */
