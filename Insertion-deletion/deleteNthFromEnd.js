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
