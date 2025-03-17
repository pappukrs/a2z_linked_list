# **Variations of Linked Lists (JavaScript)**
---
## **1. How Do You Implement a Doubly Linked List?**
A **Doubly Linked List (DLL)** is a type of linked list where each node contains two pointers:
- **`prev`** → Points to the **previous node**.
- **`next`** → Points to the **next node**.

### **Implementation of a Doubly Linked List**
```javascript
class DoublyListNode {
    constructor(value) {
        this.value = value;
        this.prev = null; // Pointer to previous node
        this.next = null; // Pointer to next node
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Insert at the end
    insertAtEnd(value) {
        let newNode = new DoublyListNode(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    // Insert at the beginning
    insertAtBeginning(value) {
        let newNode = new DoublyListNode(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    // Display the list
    display() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(" <-> "));
    }
}

// Usage
let dll = new DoublyLinkedList();
dll.insertAtEnd(10);
dll.insertAtEnd(20);
dll.insertAtEnd(30);
dll.insertAtBeginning(5);
dll.display(); // Output: 5 <-> 10 <-> 20 <-> 30
```

### **Complexity**
- **Insertion at Beginning** → O(1)
- **Insertion at End** → O(1)
- **Traversal** → O(n)

---

## **2. Advantages of a Doubly Linked List Over a Singly Linked List**
| Feature                | Singly Linked List (SLL) | Doubly Linked List (DLL) |
|------------------------|-------------------------|--------------------------|
| **Traversal**         | One direction (next only) | Both directions (prev & next) |
| **Insertion/Deletion at Tail** | O(n) (need traversal) | O(1) (direct access via tail) |
| **Reversing the List** | O(n) | O(n) (traverse backward) |
| **Memory Overhead**    | Less (1 pointer per node) | More (2 pointers per node) |

**Conclusion:**  
DLLs provide **faster insertion, deletion, and reverse traversal**, but they use **more memory** than SLLs.

---

## **3. How Can You Detect and Remove a Loop in a Linked List?**
A **loop (cycle) in a linked list** occurs when a node points back to a previous node instead of `null`.

### **Detecting a Loop: Floyd’s Cycle Detection Algorithm (Tortoise and Hare)**
- **Slow pointer (`slow`)** moves **one step** at a time.
- **Fast pointer (`fast`)** moves **two steps** at a time.
- If they **meet**, a **cycle exists**.

```javascript
function detectCycle(head) {
    let slow = head, fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;         // Move 1 step
        fast = fast.next.next;     // Move 2 steps

        if (slow === fast) return true; // Cycle detected
    }
    return false;
}
```
**Time Complexity:** O(n)  
**Space Complexity:** O(1)

---

### **Removing the Loop**
1. Detect the cycle.
2. Find the **starting node** of the loop.
3. Break the loop by setting the last node’s `next = null`.

```javascript
function removeLoop(head) {
    let slow = head, fast = head;

    // Detect cycle
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) break;
    }

    // No cycle found
    if (slow !== fast) return head;

    // Find start of the loop
    slow = head;
    while (slow.next !== fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    // Break the loop
    fast.next = null;
    return head;
}
```
**Time Complexity:** O(n)  
**Space Complexity:** O(1)

---

## **4. How Would You Implement a Circular Linked List?**
A **Circular Linked List (CLL)** is a linked list where:
- The **last node** points back to the **first node**.
- There is **no NULL** at the end.

### **Implementation of a Circular Singly Linked List**
```javascript
class CircularListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
    }

    // Insert at end
    insert(value) {
        let newNode = new CircularListNode(value);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head; // Circular link
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head; // Circular link
        }
    }

    // Display list
    display() {
        if (!this.head) return;
        let current = this.head;
        let result = [];

        do {
            result.push(current.value);
            current = current.next;
        } while (current !== this.head);

        console.log(result.join(" -> "));
    }
}

// Usage
let cll = new CircularLinkedList();
cll.insert(10);
cll.insert(20);
cll.insert(30);
cll.display(); // Output: 10 -> 20 -> 30
```
**Time Complexity:** O(n) (for insertion and traversal)

---

## **5. Applications of Circular Linked Lists**
Circular linked lists are **widely used** in real-world applications:
1. **Operating System Process Scheduling** (Round Robin Algorithm)
2. **Multiplayer Board Games** (Players take turns in a circular manner)
3. **Music Playlists** (Continuously looping playlist)
4. **Buffer Management in Networking** (Circular queues)
5. **Token Passing in Networks** (e.g., Token Ring Protocol)

---

## **Summary**
| **Variation** | **Key Features** | **Time Complexity** |
|--------------|-----------------|----------------------|
| **Doubly Linked List (DLL)** | Two pointers (`prev` & `next`), Bidirectional traversal | O(1) insertion/deletion at head & tail |
| **Cycle Detection** | Floyd’s Cycle Detection Algorithm (Tortoise & Hare) | O(n) |
| **Loop Removal** | Detect loop and set `lastNode.next = null` | O(n) |
| **Circular Linked List (CLL)** | Last node points to head, No `null` | O(n) insertion, O(n) traversal |

---
### **Next Steps**
Would you like to explore **advanced linked list problems**, such as **LRU Cache**, **Flattening a Linked List**, or **Intersection of Two Lists**? 🚀