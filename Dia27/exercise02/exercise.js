import { Node } from "./Node.js";

export class PatientList {
  constructor(beds) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.LENGTH_MAX = beds;
  }

  obtainFirstAvailableBedNumber() {
    let beds = new Set();
    if (this.length !== 0) {
      let actual = this.head;
      while (actual) {
        beds.add(actual.bedNumber);
        actual = actual.next;
      }
      for (let i = 1; i <= this.LENGTH_MAX; i++) {
        if (!beds.has(i)) {
          return i;
        }
      }
    }
    return 1;
  }

  addPatient(name, age) {
    if (this.length === this.LENGTH_MAX) {
      throw new Error("No hay camas disponibles");
    }
    const newNode = new Node(name, age, this.obtainFirstAvailableBedNumber());
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  removePatient(name) {
    if (!this.head) {
      throw new Error("No hay pacientes");
    }
    if (this.head.name === name) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.name === name) {
        currentNode.next = currentNode.next.next;
        this.length--;
        return;
      }
      currentNode = currentNode.next;
    }
    throw new Error("Paciente no encontrado");
  }

  getPatient(name) {
    if (!this.head) {
      throw new Error("No hay pacientes");
    }
    let actual = this.head;
    while ((actual.next != null) && (actual.name != name)) {
      actual = actual.next
    }
    if (actual.next == null) {
      throw new Error("Paciente no encontrado");
    }
    return {
      name: actual.name,
      age: actual.age,
      bedNumber: actual.bedNumber,
    }
  }

  getPatientList() {
    if (!this.head) {
      throw new Error("No hay pacientes");
    }
    let array = [];
    let actual = this.head;
    while (actual) {
      array.push({
        name: actual.name,
        age: actual.age,
        bedNumber: actual.bedNumber,
      });
      actual = actual.next;
    }
    return array;
  }

  getAvailableBeds() {
    if (!this.head) {
      throw new Error("No hay pacientes");
    }
    let beds = new Set();
    let actual = this.head;
    while (actual) {
      beds.add(actual.bedNumber);
      actual = actual.next;
    }
    return this.LENGTH_MAX - beds.size;
  }
}

// Tests
// Test 1
console.log('Test 1: Crear lista enlazada y obtener lista');
let list = new PatientList(3);
list.addPatient("Paciente 1", 20);
list.addPatient("Paciente 2", 30);
let calculated = list.getPatientList();
let output = [
  { name: "Paciente 1", age: 20, bedNumber: 1 },
  { name: "Paciente 2", age: 30, bedNumber: 2 },
];
let assertion = JSON.stringify(output) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output)}`);
}
// Test 2
console.log('Test 2: Crear lista enlazada y obtener paciente');
list = new PatientList(3);
list.addPatient("Paciente 1", 20);
list.addPatient("Paciente 2", 30);
calculated = list.getPatient("Paciente 1");
output = {
  name: "Paciente 1",
  age: 20,
  bedNumber: 1,
};
assertion = JSON.stringify(output) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output)}`);
}
// Test 3
console.log('Test 3: Crear lista enlazada, remover paciente y obtener lista');
list = new PatientList(3);
list.addPatient("Paciente 1", 20);
list.addPatient("Paciente 2", 30);
list.removePatient("Paciente 1");
calculated = list.getPatientList();
output = [ { name: "Paciente 2", age: 30, bedNumber: 2 }, ];
assertion = JSON.stringify(output) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output)}`);
}