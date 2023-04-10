export class Animal {
  constructor (name, age, specie) {
    this._name = name;
    this._age = age;
    this._specie = specie;
  }
  getInfo() {
    return {
      name: this._name,
      age: this._age,
      specie: this._specie,
    }
  }
}

export class Mammal extends Animal {
  constructor (name, age, specie, hasFur) {
    super(name, age, specie);
    this._hasFur = hasFur;
  }
  getInfo() {
    return {
      ...super.getInfo(),
      hasFur: this._hasFur,
    }
  }
}

export class Dog extends Mammal {
  constructor(name, age, breed, hasFur) {
    super(name, age, "dog", hasFur);
    this._breed = breed;
  }
  getInfo() {
    return {
      ...super.getInfo(),
      breed: this._breed,
    }
  }
  bark() {
    return "woof!";
  }
}

// Tests
let input1 = new Animal("Pepe", 1, "bird");
// Test 1
console.log('Test 1: Crear animal bird');
let calculated = input1.getInfo();
let output1 = {
  name: "Pepe",
  age: 1,
  specie: "bird",
}
let assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}
// Test 2
console.log('Test 2: Crear mammal bartolo');
input1 = new Mammal("bartolo", 3, "hippo", false);
calculated = input1.getInfo();
output1 = {
  name: "bartolo",
  age: 3,
  specie: "hippo",
  hasFur: false,
};
assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
};
// Test 3
console.log('Test 3: Crear dog pastor aleman');
input1 = new Dog("fido", 4, "pastor aleman", true);
calculated = input1.bark();
output1 = "woof!";
assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}