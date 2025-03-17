class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function insertAtBeginning(head, value) {
    let newNode = new ListNode(value); 
    newNode.next = head;               
    return newNode;                     
}

// Test case 1: Insert into an empty list
let head = null;
head = insertAtBeginning(head, 10);
console.log(head.value); // Expected output: 10
console.log(head.next);  // Expected output: null

// Test case 2: Insert into a list with one node
head = insertAtBeginning(head, 20);
console.log(head.value); // Expected output: 20
console.log(head.next.value); // Expected output: 10
console.log(head.next.next);  // Expected output: null

// Test case 3: Insert into a list with multiple nodes
head = insertAtBeginning(head, 30);
console.log(head.value); // Expected output: 30
console.log(head.next.value); // Expected output: 20
console.log(head.next.next.value); // Expected output: 10
console.log(head.next.next.next);  // Expected output: null
