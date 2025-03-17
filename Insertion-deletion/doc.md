## **Insertion and Deletion in a Linked List (JavaScript)**
---
Now, let’s go in-depth on **insertion** and **deletion** operations in a **singly linked list** with **concepts** and **implementations** in **JavaScript**.

### **1. Insert a Node at the Beginning of a Linked List**
#### **Concept**
To insert a node at the beginning:
1. Create a new node.
2. Set `newNode.next` to point to the current head.
3. Update the head to be the new node.

#### **Implementation**
```javascript
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function insertAtBeginning(head, value) {
    let newNode = new ListNode(value); // Create new node
    newNode.next = head;               // Point new node to current head
    return newNode;                     // New node becomes the head
}
```
#### **Complexity**
- **Time Complexity:** O(1) → Constant time as we only modify pointers.
- **Space Complexity:** O(1) → No extra space used.

---

### **2. Insert a Node at the End of a Linked List**
#### **Concept**
To insert a node at the end:
1. Traverse to the last node.
2. Set `lastNode.next` to point to the new node.

#### **Implementation**
```javascript
function insertAtEnd(head, value) {
    let newNode = new ListNode(value);
    
    if (!head) return newNode; // If list is empty, new node is head

    let current = head;
    while (current.next !== null) {
        current = current.next; // Traverse to the last node
    }
    current.next = newNode; // Link last node to new node
    return head;
}
```
#### **Complexity**
- **Time Complexity:** O(n) → Must traverse to the last node.
- **Space Complexity:** O(1) → No extra space used.

---

### **3. Insert a Node at a Specific Position**
#### **Concept**
To insert at a specific position:
1. Traverse to the node before the target position.
2. Set `newNode.next` to `current.next`.
3. Update `current.next` to point to the new node.

#### **Implementation**
```javascript
function insertAtPosition(head, value, position) {
    let newNode = new ListNode(value);
    
    if (position === 0) {
        newNode.next = head;
        return newNode;
    }

    let current = head;
    let count = 0;

    while (current !== null && count < position - 1) {
        current = current.next;
        count++;
    }

    if (!current) return head; // If position is greater than list length

    newNode.next = current.next;
    current.next = newNode;
    
    return head;
}
```
#### **Complexity**
- **Time Complexity:** O(n) → Worst case, traverse the entire list.
- **Space Complexity:** O(1).

---

### **4. Delete a Node Given Only a Pointer to That Node**
#### **Concept**
If we are only given a reference to the node (not the head), we cannot delete it conventionally. Instead:
1. Copy the `next` node’s value into the current node.
2. Set `current.next` to `current.next.next`, effectively skipping the next node.

#### **Implementation**
```javascript
function deleteNode(node) {
    if (!node || !node.next) return; // Cannot delete if it's last node

    node.value = node.next.value; // Copy next node's value
    node.next = node.next.next;   // Remove next node
}
```
#### **Complexity**
- **Time Complexity:** O(1) → Constant time operation.
- **Space Complexity:** O(1).

#### **Limitation**
- We **cannot delete the last node** this way.

---

### **5. Delete the Nth Node from the End**
#### **Concept**
To delete the **Nth node from the end**, we use **two pointers**:
1. Move `fast` pointer `n` steps ahead.
2. Move `slow` pointer from head until `fast` reaches the end.
3. `slow.next` is the node to be deleted.

#### **Implementation**
```javascript
function deleteNthFromEnd(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let fast = dummy, slow = dummy;

    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next; // Remove the nth node
    return dummy.next;
}
```
#### **Complexity**
- **Time Complexity:** O(n) → Single pass through the list.
- **Space Complexity:** O(1).

---

## **Summary**
| **Operation** | **Concept** | **Time Complexity** | **Space Complexity** |
|--------------|------------|--------------------|--------------------|
| **Insert at Beginning** | Change head pointer | O(1) | O(1) |
| **Insert at End** | Traverse to last node, update `next` | O(n) | O(1) |
| **Insert at Specific Position** | Traverse, insert at correct position | O(n) | O(1) |
| **Delete Given Only a Node Pointer** | Copy next node’s value, update `next` | O(1) | O(1) |
| **Delete Nth from End** | Use two-pointer approach | O(n) | O(1) |

---

These are fundamental **insertion and deletion** operations in a **singly linked list**.  
Would you like to proceed to **doubly linked lists**, **circular linked lists**, or more **advanced problems**? 🚀