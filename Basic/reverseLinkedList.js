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

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);

const reversed = reverseLinkedList(head);
console.log(reversed); // Output: [3, 2, 1]
    