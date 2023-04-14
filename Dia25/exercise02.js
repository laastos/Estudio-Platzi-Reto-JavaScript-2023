export class ContactList {
  constructor(size) {
    this.buckets = new Array(size);
    this.numBuckets = this.buckets.length;
  }

  hash(name) {
    let total = 0;
    for (let i = 0; i < name.length; i++) {
      total += name.charCodeAt(i);
    }
    return total % this.numBuckets;
  }

  insert(name, phone) {
    let index = this.hash(name);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    this.buckets[index].push([name, phone]);
  }

  get(name) {
    let index = this.hash(name);
    if (!this.buckets[index]) {
      return null;
    }
    let item = this.buckets[index].find((item) => item[0] === name);
    if (item != undefined) {
      return item[1];
    } else {
      return null;
    }
  }

  retrieveAll() {
    return this.buckets.flat();
  }

  delete(name) {
    let index = this.hash(name);
    if (!this.buckets[index]) {
      return null;
    }
    let itemIndex = this.buckets[index].findIndex((item) => item[0] === name);
    if (itemIndex != -1) {
      this.buckets[index].splice(itemIndex, 1);
    } else {
      return null;
    }
  }
}

// Tests
let contactList = new ContactList(10)
contactList.insert("Mr michi", "123-456-7890")
// Test 1
console.log('Test 1: Crear lista de contactos y obtener los datos');
let calculated = contactList.retrieveAll();
let output = [["Mr michi", "123-456-7890"]];
let assertion = JSON.stringify(output) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output)}`);
}
// Test 2
console.log('Test 2: Crear lista de contactos y obtener un dato');
calculated = contactList.get("Mr michi");
output = "123-456-7890";
assertion = JSON.stringify(output) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output)}`);
}
// Test 3
console.log('Test 3: Crear lista de contactos, eliminar un dato y obtenerlo');
contactList.delete("Mr michi");
calculated = contactList.get("Mr michi");
output = null;
assertion = JSON.stringify(output) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output)}`);
}
