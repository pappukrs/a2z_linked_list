class RandomListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.random = null;
    }
}

function cloneRandomList(head) {
    if (!head) return null;

    let current = head;

    // Step 1: Clone each node and insert it next to original
    while (current) {
        let copy = new RandomListNode(current.value);
        copy.next = current.next;
        current.next = copy;
        current = copy.next;
    }

    // Step 2: Assign correct random pointers
    current = head;
    while (current) {
        if (current.random) {
            current.next.random = current.random.next;
        }
        current = current.next.next;
    }

    // Step 3: Detach cloned nodes
    let newHead = head.next, copy = newHead;
    current = head;
    
    while (current) {
        current.next = current.next.next;
        if (copy.next) copy.next = copy.next.next;
        current = current.next;
        copy = copy.next;
    }

    return newHead;
}
