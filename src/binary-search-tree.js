const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.rootElem = null;
  }
  
  root() {
    return this.rootElem;
  }

  add(data) {
    this.rootElem = addInside(this.rootElem, data);

    function addInside(node, data) {
      if (!node) return new Node(data);

      if (node.data === data) return node;

      if (data < node.data) {
        node.left = addInside(node.left, data);
      } else {
        node.right = addInside(node.right, data);
      }

      return node;
    }
  }

  has( data ) {
    return lookupIside(this.rootElem, data);

    function lookupIside(node, data) {
      if (!node) return false;

      if (data === node.data) return true;

      if (data < node.data) {
        return lookupIside(node.left, data);
      } else {
        return lookupIside(node.right, data);
      }
    }
  }

  find(data) {
    return findIside(this.rootElem, data);

    function findIside(node, data) {
      if (!node) return null;

      if (data === node.data) {
        return node;
      }

      if (data < node.data) {
        node = findIside(node.left, data);
        return node;
      } else if (data > node.data) {
        node = findIside(node.right, data);
        return node;
      }

      return null;
    }
  }

  remove(data) {
    this.rootElem = removeNode(this.rootElem, data);

    function removeNode(node, data) {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {

        if (!node.left && !node.right) {
          return null;
        } else if (!node.left) {
          node = node.right;
          return node;
        } else if (!node.right) {
          node = node.left;
          return node;
        } else {
          let maxFromLeft = node.left;

          while (maxFromLeft.right) {
            maxFromLeft = maxFromLeft.right;
          }
          node.data = maxFromLeft.data;
          node.left = removeNode(node.left, maxFromLeft.data);

          return node; 
        }
      }
    }
  }

  min() {
    let node = this.rootElem;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    let node = this.rootElem;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};