class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function hasCycle(head) {
    let slow = head, fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true; 
        }
    }
    return false; 
}

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = head; 

console.log(hasCycle(head)); 
