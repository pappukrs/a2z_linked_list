
## **Basic Concepts**  

### **1. What is the difference between an array and a linked list?**  

| Feature           | Array                           | Linked List                      |
|------------------|--------------------------------|----------------------------------|
| **Storage**     | Stored in contiguous memory   | Stored in non-contiguous memory |
| **Access**      | Random access via index       | Sequential access only          |
| **Insertion**   | Costly in the middle (shifting required) | Efficient (no shifting needed)  |
| **Deletion**    | Costly in the middle (shifting required) | Efficient (just update links)  |
| **Memory Usage**| Fixed or resizable (extra space) | Dynamic size, but extra memory for pointers |
| **Implementation**| Simple, direct indexing | Requires pointers and more complex operations |

💡 **Example**:  
```javascript
let arr = [1, 2, 3, 4, 5]; // Array
```
```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
```

---

### **2. What are the advantages and disadvantages of linked lists?**  

#### **✅ Advantages:**  
- Dynamic size (no need to define size upfront).  
- Efficient insertions and deletions.  
- No memory wastage like arrays (no pre-allocation).  

#### **❌ Disadvantages:**  
- Uses extra memory for pointers.  
- Cannot perform direct indexing (O(n) search time).  
- Extra overhead in maintaining pointers.  

---

## **Intermediate Problems**  

### **3. How do you convert a binary tree to a doubly linked list?**  
💡 **Idea**: Perform an in-order traversal and link the nodes like a doubly linked list.

```javascript
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = this.right = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}

function treeToDoublyList(root) {
    let prev = null, head = null;

    function inorder(node) {
        if (!node) return;
        inorder(node.left);
        
        if (!prev) head = node;
        else {
            prev.right = node;
            node.left = prev;
        }
        
        prev = node;
        inorder(node.right);
    }

    inorder(root);
    return head;
}
```

---

### **4. How can you implement a stack using a linked list?**  
💡 **Idea**: Use a singly linked list where the top of the stack is the head of the linked list.

```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        let newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop() {
        if (!this.top) return null;
        let value = this.top.value;
        this.top = this.top.next;
        return value;
    }
}
```

---

### **5. How would you implement a queue using a linked list?**  
💡 **Idea**: Use a singly linked list with **front** (dequeue) and **rear** (enqueue) pointers.

```javascript
class Queue {
    constructor() {
        this.front = this.rear = null;
    }

    enqueue(value) {
        let newNode = new Node(value);
        if (!this.rear) {
            this.front = this.rear = newNode;
            return;
        }
        this.rear.next = newNode;
        this.rear = newNode;
    }

    dequeue() {
        if (!this.front) return null;
        let value = this.front.value;
        this.front = this.front.next;
        if (!this.front) this.rear = null;
        return value;
    }
}
```

---

### **6. How do you split a linked list into two separate lists?**  
💡 **Idea**: Use two pointers to divide the list into two halves.

```javascript
function splitLinkedList(head) {
    if (!head || !head.next) return [head, null];

    let slow = head, fast = head, prev = null;
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null;
    return [head, slow];
}
```

---

## **Advanced Problems**  

### **7. How can you rotate a linked list?**  
💡 **Idea**: Move the last `k` elements to the front.

```javascript
function rotateList(head, k) {
    if (!head || k === 0) return head;
    
    let length = 1, tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }

    k = k % length;
    if (k === 0) return head;

    tail.next = head; // Make it circular
    let newTail = head;

    for (let i = 0; i < length - k - 1; i++) {
        newTail = newTail.next;
    }

    let newHead = newTail.next;
    newTail.next = null;
    return newHead;
}
```

---

### **8. How would you remove the kth node from the end without calculating the length?**  
💡 **Idea**: Use **two-pointer approach** (fast and slow pointer).

```javascript
function removeKthFromEnd(head, k) {
    let dummy = new Node(0);
    dummy.next = head;
    let fast = dummy, slow = dummy;

    for (let i = 0; i <= k; i++) {
        fast = fast.next;
    }

    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;
    return dummy.next;
}
```

---

### **9. How do you find the length of a linked list both iteratively and recursively?**  

#### **Iterative Approach:**
```javascript
function getLength(head) {
    let count = 0, current = head;
    while (current) {
        count++;
        current = current.next;
    }
    return count;
}
```

#### **Recursive Approach:**
```javascript
function getLengthRecursive(head) {
    if (!head) return 0;
    return 1 + getLengthRecursive(head.next);
}
```

---

### **Conclusion**  
We covered linked list concepts from **basic to advanced**:
✅ Differences between Arrays and Linked Lists  
✅ Advantages and Disadvantages of Linked Lists  
✅ Implementing **Stacks** and **Queues** using Linked Lists  
✅ Solving problems like **Palindrome Check, Reversal, Addition**  
✅ Advanced techniques like **Rotations, Fast-Slow Pointer Methods**  

