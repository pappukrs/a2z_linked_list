class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

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


// Test case 1: Delete the head node
let head = new ListNode(10);
deleteNthFromEnd(head, 1);
console.log(head.value); // Expected output: 10
console.log(head.next);  // Expected output: null


// Test case 2: Delete a node in the middle of the list
let head2 = new ListNode(10);
head2.next = new ListNode(20);
head2.next.next = new ListNode(30);
deleteNthFromEnd(head2, 2);
console.log(head2.value); // Expected output: 10
console.log(head2.next.value); // Expected output: 30
console.log(head2.next.next);  // Expected output: null


// Test case 3: Delete the last node
let head3 = new ListNode(10);   
head3.next = new ListNode(20);
head3.next.next = new ListNode(30);
deleteNthFromEnd(head3, 1);
console.log(head3.value); // Expected output: 10
console.log(head3.next.value); // Expected output: 20
console.log(head3.next.next);  // Expected output: null


// Test case 4: Delete the second node from the end
let head4 = new ListNode(10);
head4.next = new ListNode(20);
head4.next.next = new ListNode(30);
deleteNthFromEnd(head4, 2);
console.log(head4.value); // Expected output: 10
console.log(head4.next.value); // Expected output: 30
console.log(head4.next.next);  // Expected output: null


// Test case 5: Delete the third node from the end
let head5 = new ListNode(10);
head5.next = new ListNode(20);
head5.next.next = new ListNode(30);
deleteNthFromEnd(head5, 3);
console.log(head5.value); // Expected output: 20
console.log(head5.next.value); // Expected output: 30
console.log(head5.next.next);  // Expected output: null














