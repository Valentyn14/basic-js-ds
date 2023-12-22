const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class LinkedLists {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let curent = this.head;
      while (curent.next) {
        curent = curent.next;
      }
      curent.next = newNode;
    }

    return this.head.value;
  }

  deleteHead() {
    if (this.head) {
      this.head = this.head.next;
    }
  }
}

class Queue {
  constructor() {
    this.item = [];
    this.linkedLists = new LinkedLists();
  }

  getUnderlyingList() {
    return this.linkedLists.head;
  }

  enqueue( value ) {
    this.item.push(value);
    this.linkedLists.append(value);
  }

  dequeue() {
    this.linkedLists.deleteHead();
    return this.item.shift();
  }
}

module.exports = {
  Queue
};
