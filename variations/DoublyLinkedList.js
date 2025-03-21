class Node {
    constructor(value) {
        this.value = value;
        this.next = null;  
        this.prev = null;  
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null; 
        this.tail = null; 
        this.size = 0;    
    }

    insertAtBeginning(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode; 
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    insertAtEnd(value) {
        const newNode = new Node(value);
        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    deleteFromBeginning() {
        if (!this.head) return null;
        let removedValue = this.head.value;
        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null; 
        }
        this.size--;
        return removedValue;
    }

    deleteFromEnd() {
        if (!this.tail) return null;
        let removedValue = this.tail.value;
        this.tail = this.tail.prev;
        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null; 
        }
        this.size--;
        return removedValue;
    }

    printForward() {
        let current = this.head;
        let listStr = "NULL ⇄ ";
        while (current) {
            listStr += `[ ${current.value} ] ⇄ `;
            current = current.next;
        }
        listStr += "NULL";
        console.log(listStr);
    }

    printBackward() {
        let current = this.tail;
        let listStr = "NULL ⇄ ";
        while (current) {
            listStr += `[ ${current.value} ] ⇄ `;
            current = current.prev;
        }
        listStr += "NULL";
        console.log(listStr);
    }
}

const dll = new DoublyLinkedList();
dll.insertAtBeginning(10);
dll.insertAtBeginning(20);
dll.insertAtEnd(30);
dll.insertAtEnd(40);

console.log("Forward Traversal:");
dll.printForward(); 

console.log("Backward Traversal:");
dll.printBackward(); 
dll.deleteFromBeginning();
dll.deleteFromEnd();

console.log("After Deletion:");
dll.printForward(); 
