// define the ListNode class:
// this is a singly linked list:
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  // add new node to the END of the list
  append(data) {
    const newNode = new ListNode(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }
  // add new node to the START of the list
  prepend(data) {
    const newNode = new ListNode(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  remove(data) {
    let current = this.head;
    if (current.data === data) {
      this.head = current.next;
      this.length--;
      return true;
    }
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        this.length--;
        return true;
      }
      current = current.next;
    }
    return false;
  }
  insert(index, data) {
    // check index boundaries!
    if (index < 0 || index > this.length) {
      return false; // index out of bounds
    }
    // make new node
    const newNode = new ListNode(data);
    // head check?
    if (index === 0) {
      // head swap
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous;
      // loop and adjust each node in the list from the head up to but not including the index because that's where the newNode goes.

      // This is faster than an insertion with an index because LinkedLists don't have to process the elements AFTER the newNode has been inserted whereas arrays need to SHIFT

      // ! LinkedLists ARE NOT efficient at adding elements at the end

      // ! O(n) time when you have to traverse from the start of the list to the insertion point. Insertion itself is in constant time = O(1)

      // ? LinkedLists are ideal if frequent resizing is needed, especially with insertions and deletions at the beginning up to the middle of the list. They are NOT great at mutating the end of the list
      for (let i = 0; i < index; i++) {
        // prev becomes the current
        previous = current;
        // current becomes the next
        current = current.next;
      }
      newNode.next = current;
      previous.next = newNode;
    }
    this.length++;
    return true;
  }
  printList() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.data);
      current = current.next; // re-assign current
    }
    console.log(result.join(" -> "));
  }
}

// construct the list:
let singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.append("f");
singlyLinkedList.append("t");
singlyLinkedList.append("d");
singlyLinkedList.append("q");
singlyLinkedList.append("y");
singlyLinkedList.append("o");
singlyLinkedList.append("p");

console.log("singlyLinkedList:", singlyLinkedList);
console.log("singlyLinkedList.printList():", singlyLinkedList.printList());
console.log("list length:", singlyLinkedList.length);

// better for bidirectional operations
// Good for "history" implementations:
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  insert(index, data) {
    if (index < 0 || index > this.length) {
      return false;
    }
    const newNode = new Node(data);
    if (index === 0) {
      this.prepend(data);
      return true;
    } else if (index === this.length) {
      this.append(data);
      return true;
    } else {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      newNode.next = current;
      newNode.prev = current.prev;
      current.prev.next = newNode;
      current.prev = newNode;
      this.length++;
      return true;
    }
  }

  remove(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
          if (this.head) {
            // New check to avoid null reference
            this.head.prev = null;
          }
        }
        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }
        this.length--;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  printForward() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join(" <-> "));
  }

  printReverse() {
    let current = this.tail;
    let result = [];
    while (current) {
      result.push(current.data);
      current = current.prev;
    }
    console.log(result.join(" <-> "));
  }
}
