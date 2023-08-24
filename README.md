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


### Tree
A general *tree* data structure is composed of nodes with children nodes. the first/top node is called the *root node*.

1. **Binary Trees**

A *binary tree* is a type of tree that has only two children nodes: left and right. 

**Tree traversal**

There are various traversal techniques, and the most popular one are: *pre-order* traversal, *post-order*, *in-order*, and *level-order* traversal.

* Pre-order Traversal

*Pre-order* traversal visits nodes in the following order: root(the current node), left, right.

* In-order Traversal 

*In-order* traversal visits nodes in the following order : left, root(current nodes), right.

* Post-order Traversal

*Post-order* traversal visits nodes in the following order: left, right, root (current node).

* Level-order Traversal

*Level-order traversal* is also known as *breadth first search*(BFS)


### Graphs

*Graphs* are are visual representation of the connections between objects.

Some basic terminology and concepts about graphs:

- *Vertex*: is node from which graphs are formed. A node will be noted as V
- *Edge*: is the connection between nodes in a graph. Graphically, 
it is the line between the vertices.
- *Degree of vertex*: the degree if a vertex refers to the number if edges an the that vertex.
- *Sparse graph*: A graph is considered sparse when only a small fraction of possible connection exist between vertices.
- *Dense graph*: A graph is considered dense wheb there are lot of connections between different vertices
- *Cyclical graph*: A A directed graph is considered cyclical if there is a path that traverls from a vertex and back to itself.
- *Weights*: weights are values on the edges. Weights can signify various things depending on the context.

**Undirected Graphs**

*Undirected graphs* are graphs that do not have a direction between edges. The edge implies a mutual connection between the two nodes without a direction.


## Algorithm

*Algorithm* is is a procedure used for solving a problem or performing a computation. Algorithms act as an exact list of instructions that conduct specified actions step by step in either hardware- or software-based.

Algorithm allows us to use data structure to perform actions on data.

1. ### Recursion

*Recursion* is not technically said a algorithm, it is just a concept that will help throught this process to write some interesting algorithms.

what is recursion?

In math, linguistic, and art, recursion refers to the occurrence of a thing defined in terms if itself. In computer science, a *recursive function* is a function thta calls itself.

2. ### Sorting

It is faster and easier to locate items in a sorted array than in an unsorted sorted array.

### Bubble sort

*Bubble sort* is simply iterates over the entire array and swaps elements if one is bigger than the other.

### Selection sort

*Selection sorting* works by scanning the elements for the smallest element and inserting it into the current position of the array. it is better that bubble sort.

### Insertion Sort

*Insertion sort* works similarly to selecion sort by searching the array sequentially and moving the unsorted items into a sorted sublist on the left side of array.

### Quicksort

*Quicksort* works by obtaining a pivot and partitioning the array around it (bigger element on one side and smaller elements on the other side) until everything is sorted.

### Quickselect

*Quickselect* is a selection algorithm to find the *kth* smallest element in unordered list. Quickselect uses the same approach as a quicksort algorithm. A pivot is chosen, and the array is partitioned.


### Mergesort

Mergesort works by dividing the array into subarrays until each array has one element. Then, each subarray is concatenated(merged) in s sorted order.

## Searching 

As mentioned, searchng is the task of looking for a specific inside a data structure. Linear searches are especially flexible because they can be used with both sorted and unsorted data. Binary searches are specifically used with sorted data.

1. Linear Search 

A linear search works by going through each element of the array one index after another sequentially.

2. Binary Search 

Binary search is a searching algorithm, in which every element of the array is checked, binary searches can check the middle value to see whether the desired value is greater or smaller than it.

3. Breadth Search First

4. Depth Search First