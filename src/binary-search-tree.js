const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }

//   add(data) {
//     if (data < this.data) {
//       this.addLeft(data);
//     } else {
//       this.addRight(data);
//     }
//   }

//   addLeft(data) {
//     if (this.left) {
//       return this.left.add(data);
//     }
//     this.left = new Node(data);
//   }

//   addRight(data) {
//     if (this.right) {
//       return this.right.add(data);
//     }
//     this.right = new Node(data);
//   }
// }

class BinarySearchTree {

  // constructor() {
  //   this.root = null;
  //   return this.root;
  // }
  
  root() {
    this.rootElem = null;
    return this.rootElem;
  }

  add(data) {
    // if (!this.rootElem) {
    //   this.rootElem = new Node(data);
    //   return this.rootElem;
    //   // return this.rootElem.add(data);
    // }
    // if (data < this.data) {
    //   this.left = new Node(data);
    // } else {
    //   this.right = new Node(data);
    // }
    // console.log(data);

        throw new NotImplementedError("Not implemented");
  }

  // constructor addStep(node, data) {
  //   if (!node) {
  //     return new Node(data);
  //   }

  //   if (data < node.data) {
  //     node.left = addStep(node.left, data);
  //   }

  //   if (data > node.data) {
  //     node.right = addStep(node.right, data);
  //   }

  //   return node;
  // }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};