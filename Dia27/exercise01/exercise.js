import { LinkedList } from "./SinglyLinkedList.js";
import { Node } from "./Node.js";

export class LinkedListRecharged extends LinkedList {
  constructor() {
    super();
  }

  validateIndex(index) {
    if (this.length === 0 || index >= this.length || index < 0) {
      return false;
    }
    return true;
  }

  get(index) {
    if (!this.validateIndex(index)) {
      return null;
    }
    let actual = this.getNodeAtIndex(index);
    return actual.value;
  }

  getNodeAtIndex(index) {
    let actual = this.head;
    for (let i = 1; i <= index; i++) {
      actual = actual.next
    }
    return actual;
  }

  insertAt(index, value){
    if (!this.validateIndex(index)) {
      return null;
    }
    if (index === 0) {
      this.prepend(value);
    } else if (index === this.length) {
      this.append(value);
    } else {
      let actual = this.getNodeAtIndex(index - 1);
      let newNode = new Node(value);
      newNode.next = actual.next;
      actual.next = newNode;
      this.length++;
    }
  }

  toArray() {
    let array = [];
    if (this.length !== 0) {
      let actual = this.head;
      while (actual) {
        array.push(actual.value);
        actual = actual.next;
      }
    }
    return array;
  }

  removeAt(index){
    if (!this.validateIndex(index)) {
      return null;
    }
    let actual = this.getNodeAtIndex(index - 1);
    let temp = actual.next;
    actual.next = temp.next;
  }
}

// Tests
// Test 1
let linkedList = new LinkedListRecharged();
console.log('Test 1: Crear lista enlazada y obtener valor');
linkedList.append("30");
linkedList.append("Días");
linkedList.append("De javascript");
let calculated = linkedList.get(1);
let output = "Días";
let assertion = JSON.stringify(output) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output)}`);
}

// Test 2
linkedList = new LinkedListRecharged();
console.log('Test 2: Crear lista enlazada, insertar un valor y obtener la nueva lista');
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.insertAt(1, 5)
calculated = linkedList.toArray();
output = [1, 5, 2, 3];
assertion = JSON.stringify(output) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output)}`);
}

// Test 3
linkedList = new LinkedListRecharged();
console.log('Test 3: Crear lista enlazada, eliminar un valor y obtener la nueva lista');
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.removeAt(1);
calculated = linkedList.toArray();
output = [1, 3];
assertion = JSON.stringify(output) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output)}`);
}