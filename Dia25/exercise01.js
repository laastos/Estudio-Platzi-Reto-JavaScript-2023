export class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  map(func) {
    let dataTemp = new MyArray();
    for (let prop in this.data) {
      dataTemp.push(func(this.data[prop]));
    }
    return dataTemp;
  }

  filter(func) {
    let dataTemp = new MyArray();
    for (let prop in this.data) {
      if (func(this.data[prop])) {
        dataTemp.push(this.data[prop]);
      }
    }
    return dataTemp;
  }

  push(item) {
    let index = this.length;
    this.data[index] = item;
    this.length++;
  }

  pop() {
    if (this.length > 0) {
      let item = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return item;
    }
  }

  join(character = ",") {
    let string = "";
    for (let prop in this.data) {
      if (string !== "") {
        string += character;
      }
      string += this.data[prop];
    }
    return string;
  }

  shift() {
    let dataTemp = {}, index = 0, item;
    if (this.length > 0) {
      item = this.data[0];
      for (let prop in this.data) {
        if (prop != 0) {
          dataTemp[index++] = this.data[prop];
        }
      }
      this.data = {...dataTemp};
      this.length--;
      return item;
    }
  }

  unshift(item) {
    if (item !== undefined) {
      let dataTemp = {}, index = 1;
      dataTemp[0] = item;
      for (let prop in this.data) {
        dataTemp[index++] = this.data[prop];
      }
      this.data = {...dataTemp};
      this.length++;
      return this.length;
    }
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
// Test 2
console.log('Test 2: Unshift');
myArray = new MyArray();
myArray.push("Platzinauta");
myArray.unshift("Hola!");
calculated = myArray.data;
output = { 0: "Hola!", 1: "Platzinauta" };
assertion = JSON.stringify(output) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output)}`);
}
// Test 3
console.log('Test 3: Shift');
myArray = new MyArray();
myArray.push("Platzinauta");
myArray.push("Hola!");
console.log(myArray.shift());
calculated = myArray.data;
output = { 0: "Hola!" };
assertion = JSON.stringify(output) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output)}`);
}