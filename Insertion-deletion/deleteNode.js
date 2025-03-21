
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


function deleteNode(node) {

    // Cannot delete if it's last node
    if (!node || !node.next) return; 


    // Copy next node's value
    node.value = node.next.value; 
    // Remove next node
    node.next = node.next.next;   
}


// Test case 1: Delete the head node
let head = new ListNode(10);
deleteNode(head);
console.log(head.value); // Expected output: 10
console.log(head.next);  // Expected output: null



// Test case 2: Delete a node in the middle of the list
let head2 = new ListNode(10);
head2.next = new ListNode(20);
head2.next.next = new ListNode(30);
deleteNode(head2.next);
console.log(head2.value); // Expected output: 10
console.log(head2.next.value); // Expected output: 30
console.log(head2.next.next);  // Expected output: null



// Test case 3: Delete the last node
let head3 = new ListNode(10);
head3.next = new ListNode(20);
head3.next.next = new ListNode(30);
deleteNode(head3.next.next);
console.log(head3.value); // Expected output: 10
console.log(head3.next.value); // Expected output: 20
console.log(head3.next.next);  // Expected output: null









