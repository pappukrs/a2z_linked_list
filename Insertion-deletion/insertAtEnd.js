class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function insertAtEnd(head, value) {
    let newNode = new ListNode(value);


    if (!head) return newNode;

    let current = head;
    while (current.next !== null) {
        current = current.next; 


    }
    current.next = newNode; 
    return head;
}





// Test case 1: Insert into an empty list
let head = null;
head = insertAtEnd(head, 10);
console.log(head.value); // Expected output: 10
console.log(head.next);  // Expected output: null

// Test case 2: Insert into a list with one node
head = insertAtEnd(head, 20);
console.log(head.value); // Expected output: 10
console.log(head.next.value); // Expected output: 20
console.log(head.next.next);  // Expected output: null

// Test case 3: Insert into a list with multiple nodes
head = insertAtEnd(head, 30);
console.log(head.value); // Expected output: 10
console.log(head.next.value); // Expected output: 20
console.log(head.next.next.value); // Expected output: 30
console.log(head.next.next.next);  // Expected output: null


