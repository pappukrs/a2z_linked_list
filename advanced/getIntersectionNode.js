class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function getIntersectionNode(headA, headB) {
    let lenA = getLength(headA);
    let lenB = getLength(headB);

    // Move longer list forward
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

// Helper function to find length
function getLength(head) {
    let length = 0;
    while (head) {
        length++;
        head = head.next;
    }
    return length;
}
