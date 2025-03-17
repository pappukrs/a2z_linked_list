class CircularListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
    }

    // Insert at end
    insert(value) {
        let newNode = new CircularListNode(value);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head; // Circular link
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head; // Circular link
        }
    }

    // Display list
    display() {
        if (!this.head) return;
        let current = this.head;
        let result = [];

        do {
            result.push(current.value);
            current = current.next;
        } while (current !== this.head);

        console.log(result.join(" -> "));
    }
}

// Usage
let cll = new CircularLinkedList();
cll.insert(10);
cll.insert(20);
cll.insert(30);
cll.display(); // Output: 10 -> 20 -> 30
