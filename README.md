## Datastructure and Algorithm
**1.Definitions**

A datastructure is a collections of values. and those values can be in relationship between each other.

Algorithms are the steps or processes we put into place to manipulate these collections of values.

**Data Structures + Algorithms = Programs**

Operations that can be used on a datastructure

- insertion
- Deletion
- Traversal (access each item once)
- Searching
- Sorting
- Access

`the first data structure`

#### 1. Array
Array are a items that are organized sequentially in the memory; I mean one after another in memory.

O of operations in the Array

- lookup O(1)
- push 0(1)
- insert O(n)
- delete O(n)

There are two types of arrays:

- static arrays: there are fixed in size
- Dynamic arrays: allows us to copy and rebuild an array at a new location which with more memory.

In Javascript arrays are dynamic. 


#### Hash Table

A *hash table* is a fixed data structure in which the size is defined at the start.

A  **hash function** is function that generated a value of fixed length for each input that gets.

### Set

A *Sets* is a group of unordered unique elements. 
Sets are important for checking and adding a unique element in O(1) constant time.

`const set = new Set()`


### Linked List
A *linked list* is a data structure in which each node points to another node. Unlike arrays, which have a fixed size, a linked list is a dynamic data structure that allocate and deallocate memory at runtime.

*Array* items are always right next to each other, *link list* and *nodes* instead are actually scattered all over the memory.

There are two types of linked list, *singly* and *doubly* linked list.

1. Singly linked Lists

The linked list data structure is one where each node (element) has reference ti the next node.It has the following properties **data** and **next**.

a *pointer* is another location reference in the memory.

2. Doubly Linked List

A *doubly linked list* can be thought of as a bidirectional singly list. Each node in the doubly linked list has both a next pointer and prev pointer.

### Stack and Queues
1. STACK
A *stack* is a data structure in which only the last inserted element can be removed and accessed. Think about plates on a table. This is a principles known as last in, first out (LIFO)

**-Peek** O(1): means returning the last-added element without removing it from the data structure.

**-Insert** O(1): adding something to the end, it can be done with Linked list and array method push()

**-Deletion** O(1): or pop delete something to the begining of the data structure, and can also be done using linked list.

**Access** O(n): accessing elements in the data structure at *nth* node from the top.

2. QUEUE 

A *queue* is also a data structure, but you can remove only the first added element. This is a principle known as *first in, first out* (FIFO).

