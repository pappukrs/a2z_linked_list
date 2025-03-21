class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function isPalindrome(head) {
    if (!head || !head.next) return true;

    let slow = head, fast = head, prev = null;

    // Find the middle of the list
    while (fast && fast.next) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }
    
    // Reverse second half
    let reversedSecondHalf = reverseList(slow);

    // Compare both halves
    let first = head, second = reversedSecondHalf;
    while (second) {
        if (first.value !== second.value) return false;
        first = first.next;
        second = second.next;
    }

    return true;
}

// Helper function to reverse a linked list
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
