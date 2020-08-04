import LinkedListNode from "./LinkedListNode"

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  prepend(data) {
    const newNode = new LinkedListNode(data, this.head) // create a new node, and the new node's next will point to the head of the current node
    this.head = newNode //current head is newNode
    if (!this.tail) {
      this.tail = newNode
    }
    return this
  }
}
