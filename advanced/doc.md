# **Advanced Linked List Problems in JavaScript**
---

## **1. How Do You Find the Intersection Point of Two Linked Lists?**
If two linked lists intersect, they **share a common node** from where they continue as one.

### **Approach: Using Two Pointers**
1. Find the **length** of both linked lists.
2. Move the pointer of the **longer list ahead** by the difference in lengths.
3. Traverse both lists together until they meet.

### **Implementation**
```javascript
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function getIntersectionNode(headA, headB) {
    let lenA = getLength(headA);
    let lenB = getLength(headB);

    // Move the longer list ahead by the difference
    while (lenA > lenB) {
        headA = headA.next;
        lenA--;
    }
    while (lenB > lenA) {
        headB = headB.next;
        lenB--;
    }

    // Find intersection
    while (headA !== headB) {
        headA = headA.next;
        headB = headB.next;
    }

    return headA; // Returns the intersection node or null
}

// Helper function to find the length of a list
function getLength(head) {
    let length = 0;
    while (head) {
        length++;
        head = head.next;
    }
    return length;
}
```
### **Time Complexity:** O(n)  
### **Space Complexity:** O(1)  

---

## **2. How Can You Detect the Starting Point of a Cycle in a Linked List?**
If a linked list has a cycle, we need to **find the node where the cycle begins**.

### **Approach: Floyd’s Cycle Detection Algorithm**
1. Use **slow** and **fast** pointers to detect the cycle.
2. Once they meet, reset **one pointer to the head**.
3. Move both pointers **one step at a time** until they meet again. The meeting point is the cycle start.

### **Implementation**
```javascript
function detectCycleStart(head) {
    let slow = head, fast = head;

    // Detect cycle
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) break;
    }

    if (!fast || !fast.next) return null; // No cycle

    // Move one pointer to head
    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow; // Cycle start node
}
```
### **Time Complexity:** O(n)  
### **Space Complexity:** O(1)  

---

## **3. How Would You Check If a Linked List Is a Palindrome?**
A linked list is a **palindrome** if it reads the same forward and backward.

### **Approach:**
1. Find the **middle** of the linked list.
2. **Reverse** the second half.
3. Compare the **first half** with the **reversed second half**.
4. Restore the list structure (optional).

### **Implementation**
```javascript
function isPalindrome(head) {
    if (!head || !head.next) return true;

    let slow = head, fast = head, prev = null;

    // Find the middle of the list
    while (fast && fast.next) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }
    
    // Reverse second half
    let reversedSecondHalf = reverseList(slow);

    // Compare both halves
    let first = head, second = reversedSecondHalf;
    while (second) {
        if (first.value !== second.value) return false;
        first = first.next;
        second = second.next;
    }

    return true;
}

// Helper function to reverse a linked list
function reverseList(head) {
    let prev = null, current = head;
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
```
### **Time Complexity:** O(n)  
### **Space Complexity:** O(1)  

---

## **4. How Can You Flatten a Multilevel Linked List?**
A **multilevel linked list** has nodes where each node may also have a **child pointer** to another linked list.

### **Approach:**
1. Use **DFS or stack** to traverse all nodes.
2. Append each child list **between current and next nodes**.

### **Implementation**
```javascript
class MultiListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.child = null;
    }
}

function flattenMultilevelList(head) {
    if (!head) return null;
    
    let stack = [head], prev = null;

    while (stack.length > 0) {
        let current = stack.pop();

        if (prev) prev.next = current;
        prev = current;

        // Push next node first (it will be processed later)
        if (current.next) stack.push(current.next);
        
        // Push child node last (it will be processed first)
        if (current.child) {
            stack.push(current.child);
            current.child = null; // Remove child pointer
        }
    }

    return head;
}
```
### **Time Complexity:** O(n)  
### **Space Complexity:** O(n)  

---

## **5. How Would You Sort a Linked List?**
Sorting a linked list can be done using **Merge Sort** because it is efficient for linked lists.

### **Approach: Merge Sort**
1. **Find the middle** of the list.
2. **Divide** the list into two halves.
3. **Recursively sort** each half.
4. **Merge** the sorted halves.

### **Implementation**
```javascript
function sortList(head) {
    if (!head || !head.next) return head;

    // Split list into two halves
    let mid = getMiddle(head);
    let nextToMid = mid.next;
    mid.next = null;

    // Sort both halves
    let left = sortList(head);
    let right = sortList(nextToMid);

    // Merge sorted halves
    return mergeSortedLists(left, right);
}

// Helper: Get middle of the linked list
function getMiddle(head) {
    let slow = head, fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

// Helper: Merge two sorted lists
function mergeSortedLists(l1, l2) {
    let dummy = new ListNode(0), current = dummy;

    while (l1 && l2) {
        if (l1.value < l2.value) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    current.next = l1 || l2;
    return dummy.next;
}
```
### **Time Complexity:** O(n log n)  
### **Space Complexity:** O(log n) (recursive calls)

---

## **Summary**
| **Problem** | **Approach** | **Time Complexity** |
|------------|-------------|----------------------|
| **Find Intersection Point** | Two pointers, align lengths | O(n) |
| **Detect Cycle Start** | Floyd’s algorithm | O(n) |
| **Palindrome Check** | Reverse second half & compare | O(n) |
| **Flatten Multilevel List** | DFS/Stack traversal | O(n) |
| **Sort Linked List** | Merge Sort | O(n log n) |

---
### **Next Steps**
Would you like to explore **LRU Cache**, **Clone a Random Pointer List**, or **Reverse Nodes in K-Groups**? 🚀






Let's dive into some **more advanced linked list problems** in JavaScript! 🚀  

---

# **1. LRU (Least Recently Used) Cache using Linked List & HashMap**
### **Problem Statement:**
Design a **Least Recently Used (LRU) Cache** that supports:
- **Get(key)** → Returns the value if the key exists, else returns -1.
- **Put(key, value)** → Inserts a key-value pair. If the cache is full, it removes the least recently used entry.

### **Approach:**
- Use a **Doubly Linked List** to store the order of access.
- Use a **HashMap** to enable O(1) access to nodes.

### **Implementation:**
```javascript
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.head = { next: null, prev: null }; // Dummy head
        this.tail = { next: null, prev: null }; // Dummy tail
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    _remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    _add(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }

    get(key) {
        if (!this.cache.has(key)) return -1;
        
        let node = this.cache.get(key);
        this._remove(node);
        this._add(node);
        return node.value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this._remove(this.cache.get(key));
        }
        
        let newNode = { key, value, next: null, prev: null };
        this.cache.set(key, newNode);
        this._add(newNode);

        if (this.cache.size > this.capacity) {
            let lru = this.tail.prev;
            this._remove(lru);
            this.cache.delete(lru.key);
        }
    }
}

// Example Usage
let lru = new LRUCache(2);
lru.put(1, 100);
lru.put(2, 200);
console.log(lru.get(1)); // 100 (Most Recently Used)
lru.put(3, 300); // Removes key 2
console.log(lru.get(2)); // -1 (Removed)
```
### **Time Complexity:** O(1)  
### **Space Complexity:** O(capacity)  

---

# **2. Clone a Linked List with Random Pointers**
### **Problem Statement:**
Given a linked list where **each node has an additional random pointer** pointing to any node in the list, **clone the list**.

### **Approach:**
1. **Step 1:** Insert a **duplicate node** next to each original node.
2. **Step 2:** Assign **random pointers**.
3. **Step 3:** Separate the original and cloned lists.

### **Implementation:**
```javascript
class RandomListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.random = null;
    }
}

function cloneRandomList(head) {
    if (!head) return null;

    // Step 1: Duplicate each node
    let current = head;
    while (current) {
        let copy = new RandomListNode(current.value);
        copy.next = current.next;
        current.next = copy;
        current = copy.next;
    }

    // Step 2: Assign random pointers
    current = head;
    while (current) {
        if (current.random) {
            current.next.random = current.random.next;
        }
        current = current.next.next;
    }

    // Step 3: Separate the cloned list
    let dummy = new RandomListNode(0);
    let cloneCurrent = dummy;
    current = head;

    while (current) {
        cloneCurrent.next = current.next;
        current.next = current.next.next;
        current = current.next;
        cloneCurrent = cloneCurrent.next;
    }

    return dummy.next;
}
```
### **Time Complexity:** O(n)  
### **Space Complexity:** O(1)  

---

# **3. Reverse Nodes in K-Groups**
### **Problem Statement:**
Given a linked list, **reverse every k nodes** in a group.

### **Approach:**
1. Count **k nodes** ahead.
2. **Reverse** the k-group.
3. Recursively call for the next k-group.

### **Implementation:**
```javascript
function reverseKGroup(head, k) {
    let current = head, count = 0;

    // Check if there are at least k nodes
    while (current && count < k) {
        current = current.next;
        count++;
    }

    if (count < k) return head; // Not enough nodes, return as is

    // Reverse first k nodes
    let prev = null, next = null;
    current = head;
    count = 0;

    while (current && count < k) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        count++;
    }

    // Recursively process the remaining nodes
    head.next = reverseKGroup(current, k);
    
    return prev; // New head of the reversed section
}

// Example Usage
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Creating Linked List: 1 -> 2 -> 3 -> 4 -> 5
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

let newHead = reverseKGroup(head, 2);
```
### **Time Complexity:** O(n)  
### **Space Complexity:** O(1)  

---

## **Summary of Advanced Linked List Problems**
| **Problem** | **Approach** | **Time Complexity** |
|------------|-------------|----------------------|
| **LRU Cache** | HashMap + Doubly Linked List | O(1) |
| **Clone a Linked List with Random Pointers** | Two-pass approach | O(n) |
| **Reverse Nodes in K-Groups** | Iterative reversing | O(n) |

---
### **What's Next?**
Want to explore **Skip Lists**, **Detecting Circular Doubly Linked Lists**, or **Find Kth Node from End**? 🚀