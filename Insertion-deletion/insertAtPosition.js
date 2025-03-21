
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


function insertAtPosition(head, value, position) {
    let newNode = new ListNode(value);
    
    if (position === 0) {
        newNode.next = head;
        return newNode;
    }

    let current = head;
    let count = 0;

    while (current !== null && count < position - 1) {
        current = current.next;
        count++;
    }

    if (!current) return head; 

    newNode.next = current.next;
    current.next = newNode;
    
    return head;
}


// Test case 1: Insert into an empty list
let head = null;
head = insertAtPosition(head, 10, 0);
console.log(head.value); // Expected output: 10
console.log(head.next);  // Expected output: null

// Test case 2: Insert into a list with one node
head = insertAtPosition(head, 20, 1);
console.log(head.value); // Expected output: 10
console.log(head.next.value); // Expected output: 20
console.log(head.next.next);  // Expected output: null


// Test case 3: Insert into a list with multiple nodes
head = insertAtPosition(head, 30, 2);
console.log(head.value); // Expected output: 10
console.log(head.next.value); // Expected output: 20
console.log(head.next.next.value); // Expected output: 30
console.log(head.next.next.next);  // Expected output: null


// Test case 4: Insert at a position greater than list length
head = insertAtPosition(head, 40, 4);
console.log(head.value); // Expected output: 10
console.log(head.next.value); // Expected output: 20
console.log(head.next.next.value); // Expected output: 30
console.log(head.next.next.next);  // Expected output: null


// Test case 5: Insert at a negative position
head = insertAtPosition(head, 50, -1);
console.log(head.value); // Expected output: 10
console.log(head.next.value); // Expected output: 20
console.log(head.next.next.value); // Expected output: 30
console.log(head.next.next.next);  // Expected output: null


// Test case 6: Insert at position 0 (head)
head = insertAtPosition(head, 60, 0);
console.log(head.value); // Expected output: 60
console.log(head.next.value); // Expected output: 10
console.log(head.next.next.value); // Expected output: 20
console.log(head.next.next.next.value); // Expected output: 30
console.log(head.next.next.next.next);  // Expected output: null


// Test case 7: Insert at position 3 (middle of the list)
head = insertAtPosition(head, 70, 3);
console.log(head.value); // Expected output: 60
console.log(head.next.value); // Expected output: 10
console.log(head.next.next.value); // Expected output: 20
console.log(head.next.next.next.value); // Expected output: 70
console.log(head.next.next.next.next);  // Expected output: null


// Test case 8: Insert at position 4 (end of the list)
head = insertAtPosition(head, 80, 4);
console.log(head.value); // Expected output: 60
console.log(head.next.value); // Expected output: 10
console.log(head.next.next.value); // Expected output: 20
console.log(head.next.next.next.value); // Expected output: 70
console.log(head.next.next.next.next.value); // Expected output: 80
console.log(head.next.next.next.next.next);  // Expected output: null


// Test case 9: Insert at position 5 (beyond the end of the list)
head = insertAtPosition(head, 90, 5);
console.log(head.value); // Expected output: 60
console.log(head.next.value); // Expected output: 10
console.log(head.next.next.value); // Expected output: 20
console.log(head.next.next.next.value); // Expected output: 70
console.log(head.next.next.next.next.value); // Expected output: 80
console.log(head.next.next.next.next.next.value); // Expected output: 90
console.log(head.next.next.next.next.next.next);  // Expected output: null






























