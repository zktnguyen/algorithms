function Node(value){
  this.value = value;
  this.next = null;
}

function solution(head){
  if (head === null){
    return 0;
  }
  var current = head, count = 0;
  while(current !== null){
    count++;
    current = current.next;
  }

  return count;
}

var head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);

console.log(solution(head)); // should = 3

head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(10);

console.log(solution(head)); // should = 6