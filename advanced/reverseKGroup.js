function reverseKGroup(head, k) {
    if (!head || k <= 1) return head;

    let count = 0;
    let current = head;

    // Count total nodes
    while (current) {
        count++;
        current = current.next;
    }

    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy, start = head;

    while (count >= k) {
        let end = start;
        for (let i = 1; i < k; i++) end = end.next;

        let nextGroup = end.next;
        end.next = null; // Temporarily break the list
        
        prev.next = reverseList(start);
        
        start.next = nextGroup;
        prev = start;
        start = nextGroup;
        count -= k;
    }

    return dummy.next;
}

// Helper function to reverse a list
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
