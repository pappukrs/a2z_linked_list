class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

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

// Example usage:
const l1 = new ListNode(1);
l1.next = new ListNode(3);
const l2 = new ListNode(2);
l2.next = new ListNode(4);

const merged = mergeSortedLists(l1, l2);
console.log(merged); // Output: [1, 2, 3, 4]
