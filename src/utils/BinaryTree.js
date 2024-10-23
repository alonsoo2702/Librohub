class Node {
    constructor(book) {
      this.book = book;
      this.left = null;
      this.right = null;
    }
  }
  
  export class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(book) {
      const newNode = new Node(book);
      if (!this.root) {
        this.root = newNode;
        return;
      }
      this._insertNode(this.root, newNode);
    }
  
    _insertNode(node, newNode) {
      if (newNode.book.isbn < node.book.isbn) {
        if (!node.left) {
          node.left = newNode;
        } else {
          this._insertNode(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          this._insertNode(node.right, newNode);
        }
      }
    }
  
    inOrderTraversal(node = this.root, result = []) {
      if (node) {
        this.inOrderTraversal(node.left, result);
        result.push(node.book);
        this.inOrderTraversal(node.right, result);
      }
      return result;
    }
  
    search(isbn, node = this.root) {
      if (!node || node.book.isbn === isbn) {
        return node;
      }
      if (isbn < node.book.isbn) {
        return this.search(isbn, node.left);
      }
      return this.search(isbn, node.right);
    }
  
    delete(isbn) {
      this.root = this._deleteNode(this.root, isbn);
    }
  
    _deleteNode(node, isbn) {
      if (!node) return null;
  
      if (isbn < node.book.isbn) {
        node.left = this._deleteNode(node.left, isbn);
        return node;
      } else if (isbn > node.book.isbn) {
        node.right = this._deleteNode(node.right, isbn);
        return node;
      }
  
      if (!node.left) return node.right;
      if (!node.right) return node.left;
  
      let minNode = this._findMin(node.right);
      node.book = minNode.book;
      node.right = this._deleteNode(node.right, minNode.book.isbn);
      return node;
    }
  
    _findMin(node) {
      while (node.left) {
        node = node.left;
      }
      return node;
    }
  }
