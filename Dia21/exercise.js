import { User } from "./user.js";

export class Chat {
  users = [];
  constructor() {
    if (!Chat.instance) {
      this.name = 'Chat';
      Chat.instance = Object.freeze(this);
    }
    return Chat.instance;
  }
  sendMessage(message) {
    this.users.forEach((user) => user.receiveMessage(message));
  }
  addUser(user) {
    if (user.constructor.name === User.name) {
      this.users.push(user);
    }
  }
  removeUser(name) {
    let userIndex = this.users.findIndex((user) => user.name === name);
    this.users.splice(userIndex, 1);
  }
}

// Tests
// Test 1
console.log('Test 1: Validar el patrón Singleton');
let chat1 = new Chat();
let chat2 = new Chat();
let calculated = chat1 === chat2;
let output1 = true;
let assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}
// Test 2
console.log('Test 2: Enviar mensajes a usuarios');
let user1 = new User("Pepito");
let user2 = new User("Juanito");
chat1.addUser(user1);
chat1.addUser(user2);
chat1.sendMessage("Nunca pares de aprender!");
calculated = user1.messages;
output1 = ["Nunca pares de aprender!"];
assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}
calculated = user2.messages;
output1 = ["Nunca pares de aprender!"];
assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}
// Test 3
console.log('Test 3: Eliminar un usuario');
chat1.removeUser("Juanito");
calculated = chat1.users;
output1 = [{"name":"Pepito","messages":["Nunca pares de aprender!"]}];
assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}
