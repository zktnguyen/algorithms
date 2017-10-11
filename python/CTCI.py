'''1.1 Implement an algorithm to determine if a string has all unique characters. What
if you cannot use additional data structures?

with additional data structures:
idea(pseudocode):
    create a dictionary of characters in the string
    if there is such a character, give a value 1
    if the character already exists in the dictionary, then it is a duplicate
    therefore it is not unique.
    O(n) or less
'''
def unique_chars(string):
    chars = dict()
    for i in string:
        if chars.has_key(i):
            return False
        else:
            chars[i] = 1
    return True

'''
Without additional data structures:
idea:
    sort the string(merge sort, quicksort...)
    iterate through the string
    change what the current character is, and if it doesn't change, it is not unique.
    O(n log n + n) = O(n log n)
'''
'''1.7
Write an algorithm such that if an element in an MxN matrix is 0, its entire row
and column are set to 0.
idea:
    iterate through matrix
    find 0s
    store the values of the columns and rows that are zeroes
    iterate through matrix again
    change values of the rows and columns that have 0s (recorded above) to 0s
'''
'''1.8 Assume you have a method isSubstring which checks if one word is a
substring of another. Given two strings, si and s2, write code to check if s2 is
a rotation of si using only one call to isSubstring (e.g.,"waterbottle"is a rotation
of "erbottlewat").
'''
'''2.1 Write code to remove duplicates from an unsorted linked list.
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?
'''
def remove_duplicates(head):
    if head == None:
        return None
    if head.next == None:
        return head
    current = head.next #2
    prev = head #1
    list_values = dict()
    list_values[prev.value] = 1 #2
    while current != None:
        if list_values.has_key(current.value):
            prev.next = current.next
        else:
            list_values[current.value] = 1 #3
            prev = prev.next
        current = current.next
    return head

'''3.1
Describe how you could use a single array to implement three stacks.
Fixed size: divide by 3, use the first 1/3 as  the first stack.
second 1/3 as the second stack.
third 1/3 as third stack.
'''

'''
3.2
How would you design a stack which, in addition to push and pop, also has a
function min which returns the minimum element? Push, pop and min should
all operate in O(1) time.
'''
'''
3.3
Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
Therefore, in real life, we would likely start a new stack when the previous stack
exceeds some threshold. Implement a data structure SetOf Stacks that mimics
this. SetOf Stacks should be composed of several stacks and should create a
new stack once the previous one exceeds capacity. SetOf Stacks. push() and
SetOf Stacks. pop() should behave identically to a single stack (that is, popO
should return the same values as it would if there were just a single stack).
FOLLOW UP
Implement a function popAt(int index) which performs a pop operation on
a specific sub-stack.
'''
'''
3.5
Implement a MyQueue class which implements a queue using two stacks.
'''
'''
3.7
An animal shelter holds only dogs and cats, and operates on a strictly "first in,
first out" basis. People must adopt either the "oldest" (based on arrival time) of
all animals at the shelter, or they can select whether they would prefer a dog or
a cat (and will receive the oldest animal of that type). They cannot select which
specificanimal they would like. Create the data structures to maintain this system
and implement operations such as enqueue, dequeueAny, dequeueDog and
dequeueCat.You may use the built-in LinkedList data structure.
'''
'''
4.1
Implement a function to check if a binary tree is balanced. For the purposes of
this question, a balanced tree is defined to be a tree such that the heights of the
two subtrees of any node never differ by more than one.
- check the height of each node's subtrees
    -
- take the difference of each height, and if it's greater than 1, then it is not balanced

'''
'''
4.2
Given a directed graph, design an algorithm to find out whether there is a route
between two nodes.
- probably implement a DFS for this, since we just want to check if there exists a path

'''
'''
4.3
Given a sorted (increasing order) array with unique integer elements, write an
algorithm to create a binary search tree with minimal height.
- binary search through the array, and place median as the root of each binary subarray

'''
'''
4.5
Implement a function to check if a binary tree is a binary search tree.
- keep a maximum and minimum value, to check the bounds of the tree
- compare the parent node to its child nodes, if left child node is greater, not a BST
    - if right node greater, not a BST
'''
'''
4.6
Write an algorithm to find the'next'node (i.e., in-order successor) of a given node
in a binary search tree. You may assume that each node has a link to its parent.
- BFS, find the node u are currently looking for and return the next one in the queue.

'''
'''
4.8
You have two very large binary trees: Tl, with millions of nodes, and T2, with
hundreds of nodes. Create an algorithm to decide ifT2 is a subtree of Tl.
A tree T2 is a subtree of Tl if there exists a node n in Tl such that the subtree of
n is identical to T2. That is, if you cut off the tree at node n, the two trees would
be identical.
'''
'''
5.1
You are given two 32-bit numbers, N and M, and two bit positions, land j. Write
a method to insert M into N such that M starts at bit j and ends at bit i. You can
assume that the bits j through i have enough space to fit all of M. That is, if
M = 10011, you can assume that there are at least 5 bits between j and i. You
would not, for example, have j = 3 and i = 2, because M could not fully fit
between bit 3 and bit 2.
EXAMPLE
Input: N = 10000000000, M = 10011, i = 2, j = 6
Output: N = 10001001100
'''
'''
8.1
Design the data structures for a generic deck of cards. Explain how you would
subclass the data structures to implement blackjack
'''
'''
8.2
Imagine you have a call center with three levels of employees: respondent,
manager, and director. An incoming telephone call must be first allocated to a
respondent who is free. If the respondent can't handle the call, he or she must
escalate the call to a manager. If the manager is not free or not able to handle it,
then the call should be escalated to a director. Design the classes and data structures
for this problem. Implement a method dispatchCall() which assigns a
call to the first available employee.
'''
'''
8.5
Design the data structures for an online book reader system.
'''
'''
8.7
Explain how you would design a chat server. In particular, provide details about
the various backend components, classes, and methods. What would be the
hardest problems to solve?
'''
'''
8.9
Explain the data structures and algorithms that you would use to design an
in-memory file system. Illustrate with an example in code where possible.
'''
'''
8.10
Design and implement a hash table which uses chaining (linked lists) to handle
collisions.
'''
'''
9.1
A child is running up a staircase with n steps, and can hop either 1 step, 2 steps,
or 3 steps at a time. Implement a method to count how many possible ways the
child can run up the stairs.
'''
'''
9.2
Imagine a robot sitting on the upper left corner of an X by Y grid. The robot can
only move in two directions: right and down. How many possible paths are there
for the robot to go from (0,0) to (X,Y)?
FOLLOW UP
Imagine certain spots are "off limits," such that the robot cannot step on them.
Design an algorithm to find a path for the robot from the top left to the bottom
right.
'''
'''
9.3
A magic index in an array A[0.. .n-1] is defined to be an index such that A[i]
= i. Given a sorted array of distinct integers, write a method to find a magic
index, if one exists, in array A.
FOLLOW UP
What if the values are not distinct?
'''
'''
9.4
Write a method to return all subsets of a set.
'''
'''
9.5
Write a method to compute all permutations of a string.
'''
'''
10.1
Imagine you are building some sort of service that will be called by up to 1000
client applications to get simple end-of-day stock price information (open,
close, high, low). You may assume that you already have the data, and you can
store it in any format you wish. How would you design the client-facing service
which provides the information to client applications? You are responsible
for the development, rollout, and ongoing monitoring and maintenance of
the feed. Describe the different methods you considered and why you would
recommend your approach. Your service can use any technologies you wish,
and can distribute the information to the client applications in any mechanism
you choose.
'''
'''
10.2
How would you design the data structures for a very large social network like
Facebook or Linkedln? Describe how you would design an algorithm to show
the connection, or path, between two people (e.g., Me -> Bob -> Susan -> Jason
-> You).
'''
'''
10.5
If you were designing a web crawler, how would you avoid getting into infinite
loops?
'''
'''
10.6
You have 10 billion URLs. How do you detect the duplicate documents? In this
case, assume that "duplicate" means that the URLs are identical.
'''
'''
11.3
Given a sorted array of n integers that has been rotated an unknown number of
times, write code to find an element in the array. You may assume that the array
was originally sorted in increasing order.
EXAMPLE
Input: find 5 in {15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14}
Output: 8 (the index of 5 in the array)
'''
'''
11.6
Given an M x N matrix in which each row and each column is sorted in ascending
order, write a method to find an element.
'''
'''
11.8
Imagine you are reading in a stream of integers. Periodically, you wish to be able
to look up the rank of a number x (the number of values less than or equal tox).
Implement the data structures and algorithms to support these operations.That
is, implement the method track(int x), which is called when each number
is generated, and the method getRankOfNumber(int x), which returns the
number of values less than or equal to x (not including x itself).
EXAMPLE
Stream (in order of appearance): 5, 1, 4, 4, 5, 9, 7, 13, 3
getRankOfNumber(l) = 0
getRankOfNumber(3) = 1
getRankOfNumber(4) = 3
'''
'''
15.5
What isdenormalization? Explain the pros and cons.
'''
'''
16.1

'''
'''
17.2
'''
'''
17.8
'''
'''
17.12
'''
'''
18.10
'''
'''
18.11

'''
