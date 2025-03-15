class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function findMiddle(head) {
    let slow = head, fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;        // Move slow by 1
        fast = fast.next.next;   // Move fast by 2
    }
    
    return slow; // Middle node
}

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);

console.log(findMiddle(head)); // Output: 2
