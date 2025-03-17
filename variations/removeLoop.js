function removeLoop(head) {
    let slow = head, fast = head;

    // Detect cycle
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) break;
    }

    // No cycle found
    if (slow !== fast) return head;

    // Find start of the loop
    slow = head;
    while (slow.next !== fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    // Break the loop
    fast.next = null;
    return head;
}
