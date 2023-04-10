export class Usuario {
  constructor(name, age) {
    this._name = name;
    this._age = age;
    this._friends = [];
    this._messages = [];
  }
  // Name
  get name() { return this._name; }
  set name(value) { this._name = value; }
  // Age
  get age() { return this._age; }
  set age(value) { this._age = value; }
  // Messages
  set message(value) { this._messages.push(value); }
  addFriend(friend) {
    this._friends.push(friend);
  }
  sendMessage(message, friend) {
    this._messages.push(message);
    let friendTemp = this._friends.find((item) => item.name == friend.name);
    friendTemp.message = message;
  }
  showMessages() {
    return this._messages;
  }
}

// Tests
let usuario1 = new Usuario("Juan", 20);
let usuario2 = new Usuario("Maria", 25);
console.log(usuario1.addFriend(usuario2));
console.log(usuario1.sendMessage("Hola Maria!", usuario2));
// Test 1
console.log('Test 1: Mostrar mensajes usuario 1');
let calculated = usuario1.showMessages();
let output1 = ["Hola Maria!"];
let assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}
// Test 2
console.log('Test 2: Mostrar mensajes usuario 2');
calculated = usuario2.showMessages();
output1 = ["Hola Maria!"];
assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}
// Test 3
console.log('Test 3: Cambiar nombre usuario 1');
usuario1.name = "Pepito";
calculated = usuario1.name;
output1 = "Pepito";
assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}
