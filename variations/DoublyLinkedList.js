class DoublyListNode {
    constructor(value) {
        this.value = value;
        this.prev = null; // Pointer to previous node
        this.next = null; // Pointer to next node
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Insert at the end
    insertAtEnd(value) {
        let newNode = new DoublyListNode(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    // Insert at the beginning
    insertAtBeginning(value) {
        let newNode = new DoublyListNode(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    // Display the list
    display() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(" <-> "));
    }
}

// Usage
let dll = new DoublyLinkedList();
dll.insertAtEnd(10);
dll.insertAtEnd(20);
dll.insertAtEnd(30);
dll.insertAtBeginning(5);
dll.display(); // Output: 5 <-> 10 <-> 20 <-> 30
