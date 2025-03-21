function sortList(head) {
    if (!head || !head.next) return head;

    let mid = getMiddle(head);
    let nextToMid = mid.next;
    mid.next = null;

    let left = sortList(head);
    let right = sortList(nextToMid);

    return mergeSortedLists(left, right);
}

function getMiddle(head) {
    let slow = head, fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function mergeSortedLists(l1, l2) {
    let dummy = new ListNode(0), current = dummy;

    while (l1 && l2) {
        if (l1.value < l2.value) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    current.next = l1 || l2;
    return dummy.next;
}
