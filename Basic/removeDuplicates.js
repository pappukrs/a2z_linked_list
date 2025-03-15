class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

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

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);

console.log(removeDuplicates(head)); // Output: [1, 2, 3]
