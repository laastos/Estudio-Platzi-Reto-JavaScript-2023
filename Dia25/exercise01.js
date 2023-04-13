export class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  map(func) {
    let dataTemp = {}
    for (let prop in this.data) {
      dataTemp[prop] = func(this.data[prop]);
    }
    return dataTemp;
  }

  filter(func) {
    // Tu código aquí 👈
  }

  push(item) {
    let index = this.length;
    this.data[index] = item;
    this.length++;
  }

  pop() {
    let index = this.length;
    let item = this.data[index];
    delete this.data[index];
    this.length--;
    return item;
  }

  join(character = ",") {
    // Tu código aquí 👈
  }

  shift() {
    // Tu código aquí 👈
  }

  unshift(item) {
    // Tu código aquí 👈
  }
}

// Tests
// Test 1
console.log('Test 1: Crear Array');
let myArray = new MyArray();
myArray.push(1);
myArray.push(2);
myArray.push(3);
let calculated = myArray.data;
let output = { 0: 1, 1: 2, 2: 3 };
let assertion = JSON.stringify(output) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output)}`);
}

