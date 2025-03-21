function detectCycleStart(head) {
    let slow = head, fast = head;

    // Detect cycle
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) break;
    }

    if (!fast || !fast.next) return null; // No cycle

    // Move one pointer to head
    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow; // Cycle start node
}
