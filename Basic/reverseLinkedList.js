class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    
    while (current !== null) {
        let next = current.next; 
        current.next = prev;     
        prev = current;         
        current = next;         
    }
    return prev; 
}


const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);

const reversed = reverseLinkedList(head);
console.log(reversed); 
