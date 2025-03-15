Let's go through each of these fundamental linked list operations step by step in **JavaScript**, covering both **concepts** and **implementations**.

---

## **1. Reverse a Singly Linked List**
### **Concept**
Reversing a singly linked list means modifying the links so that the last node becomes the first and vice versa. The basic approach is to iterate through the list and reverse the `next` pointers.

### **Steps**
1. Initialize three pointers:  
   - `prev` → `null` (initially)
   - `current` → `head`
   - `next` → `null`
2. Traverse the list while `current` is not `null`:
   - Store the next node in `next`
   - Reverse the `current.next` pointer to `prev`
   - Move `prev` and `current` one step forward
3. Return `prev` as the new head of the reversed list.

### **Implementation**
```javascript
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    
    while (current !== null) {
        let next = current.next; // Store next node
        current.next = prev;     // Reverse the link
        prev = current;          // Move prev forward
        current = next;          // Move current forward
    }
    return prev; // New head of reversed list
}
```

### **Complexity**
- **Time Complexity:** O(n) (Traverses the list once)
- **Space Complexity:** O(1) (In-place reversal)

---

## **2. Detect a Cycle in a Linked List**
### **Concept**
A cycle in a linked list occurs when a node's `next` pointer points back to a previous node. We can detect a cycle using **Floyd's Cycle Detection Algorithm (Tortoise and Hare method)**.

### **Steps**
1. Use two pointers:
   - `slow` moves **one step** at a time.
   - `fast` moves **two steps** at a time.
2. If `fast` and `slow` meet at any point, there is a cycle.
3. If `fast` reaches the end (`null`), there is no cycle.

### **Implementation**
```javascript
function hasCycle(head) {
    let slow = head, fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true; // Cycle detected
        }
    }
    return false; // No cycle
}
```

### **Complexity**
- **Time Complexity:** O(n) (In worst case, `fast` traverses the list once)
- **Space Complexity:** O(1) (No extra space used)

---

## **3. Find the Middle Element of a Linked List**
### **Concept**
To find the middle of a linked list efficiently, we use the **slow and fast pointer technique**:
- `slow` moves **one step** at a time.
- `fast` moves **two steps** at a time.
- When `fast` reaches the end, `slow` is at the middle.

### **Implementation**
```javascript
function findMiddle(head) {
    let slow = head, fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;        // Move slow by 1
        fast = fast.next.next;   // Move fast by 2
    }
    
    return slow; // Middle node
}
```

### **Complexity**
- **Time Complexity:** O(n) (Traverses half the list)
- **Space Complexity:** O(1) (Uses constant space)

---

## **4. Merge Two Sorted Linked Lists**
### **Concept**
Given two sorted linked lists, merge them into one sorted list by comparing elements.

### **Steps**
1. Compare the heads of both lists.
2. Attach the smaller node to the new list.
3. Move forward in the list from which a node was taken.
4. Repeat until one list is exhausted.
5. Attach the remaining nodes from the non-empty list.

### **Implementation**
```javascript
function mergeSortedLists(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    if (l1.value < l2.value) {
        l1.next = mergeSortedLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeSortedLists(l1, l2.next);
        return l2;
    }
}
```

### **Complexity**
- **Time Complexity:** O(n + m) (n and m are the sizes of the two lists)
- **Space Complexity:** O(n + m) (Due to recursion, can be reduced to O(1) with iteration)

---

## **5. Remove Duplicates from an Unsorted Linked List**
### **Concept**
Since it's **unsorted**, we use a **hash set** to track seen values and remove duplicates.

### **Steps**
1. Create a `Set` to store unique values.
2. Traverse the list:
   - If a value is seen before, remove the node.
   - Otherwise, add it to the `Set`.
3. Continue until the end.

### **Implementation**
```javascript
function removeDuplicates(head) {
    let seen = new Set();
    let current = head;
    let prev = null;

    while (current !== null) {
        if (seen.has(current.value)) {
            prev.next = current.next; // Skip duplicate node
        } else {
            seen.add(current.value);
            prev = current;
        }
        current = current.next;
    }

    return head;
}
```

### **Complexity**
- **Time Complexity:** O(n) (One pass through the list)
- **Space Complexity:** O(n) (Uses a set to store unique values)

---

## **Summary**
| **Operation** | **Concept** | **Time Complexity** | **Space Complexity** |
|--------------|------------|--------------------|--------------------|
| **Reverse Linked List** | Change `next` pointers iteratively | O(n) | O(1) |
| **Detect Cycle** | Floyd’s Cycle Detection (fast & slow pointers) | O(n) | O(1) |
| **Find Middle** | Fast and slow pointer method | O(n) | O(1) |
| **Merge Sorted Lists** | Recursively compare & merge | O(n + m) | O(n + m) |
| **Remove Duplicates** | Use a Set to track visited values | O(n) | O(n) |

---

These operations form the foundation of linked list manipulation in JavaScript and are commonly asked in **DSA interviews**. Would you like to explore **doubly linked lists** or practice **more advanced linked list problems** next? 🚀