function deleteNode(node) {
    if (!node || !node.next) return; // Cannot delete if it's last node

    node.value = node.next.value; // Copy next node's value
    node.next = node.next.next;   // Remove next node
}
