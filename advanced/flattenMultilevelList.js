class MultiListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.child = null;
    }
}

function flattenMultilevelList(head) {
    if (!head) return null;
    
    let stack = [head], prev = null;

    while (stack.length > 0) {
        let current = stack.pop();

        if (prev) prev.next = current;
        prev = current;

        if (current.next) stack.push(current.next);
        
        if (current.child) {
            stack.push(current.child);
            current.child = null; // Remove child pointer
        }
    }

    return head;
}
