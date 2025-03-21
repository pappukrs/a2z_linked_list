class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertAtBeginning(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.tail.next = this.head;
        }
        this.size++;
    }

    insertAtEnd(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
        }
        this.size++;
    }

    deleteFromBeginning() {
        if (!this.head) return null;
        let removedValue = this.head.value;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.tail.next = this.head;
        }
        this.size--;
        return removedValue;
    }

    deleteFromEnd() {
        if (!this.head) return null;
        let removedValue = this.tail.value;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let current = this.head;
            while (current.next !== this.tail) {
                current = current.next;
            }
            this.tail = current;
            this.tail.next = this.head;
        }
        this.size--;
        return removedValue;
    }

    printList() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        let current = this.head;
        let listStr = "";
        do {
            listStr += `[ ${current.value} ] → `;
            current = current.next;
        } while (current !== this.head);
        console.log(listStr + "(circular)");
    }
}

const cll = new CircularLinkedList();
cll.insertAtBeginning(10);
cll.insertAtBeginning(20);
cll.insertAtEnd(30);
cll.insertAtEnd(40);

console.log("Circular Linked List:");
cll.printList();

cll.deleteFromBeginning();
cll.deleteFromEnd();

console.log("After Deletion:");
cll.printList();