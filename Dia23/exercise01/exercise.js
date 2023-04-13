import { User } from './user.js';
import { Messages } from './messages.js';

export class MessagesProxy {
  constructor(messages, user) {
    this.messages = messages;
    this.user = user;
  }

  sendMessage(text) {
    if (this.user.isLoggedIn()) {
      this.messages.sendMessage(text);
    } else {
      throw new Error("Usuario no registrado");
    }
  }

  getHistory() {
    if (this.user.isLoggedIn()) {
      return this.messages.getHistory();
    } else {
      throw new Error("Usuario no registrado");
    }
  }
}

// Tests
// Test 1
console.log('Test 1: Usuario registrado');
let user = new User("John");
user.login();
let calculated = user.isLoggedIn();
let output = true;
let assertion = JSON.stringify(output) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output)}`);
}
// Test 2
console.log('Test 2: Historial de mensajes');
let messages = new Messages();
let messagesProxy = new MessagesProxy(messages, user);
user.login();
messagesProxy.sendMessage("Hola");
calculated = messagesProxy.getHistory();
output = ["Hola"];
assertion = JSON.stringify(output) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output)}`);
}
// Test 3
console.log('Test 3: Envío de mensaje de usuario no registrado');
messages = new Messages();
messagesProxy = new MessagesProxy(messages, user);
user.logout();
try {
  messagesProxy.sendMessage("Hola");
  messagesProxy.getHistory();
} catch (err) {
  calculated = err.message;
}
output = "Usuario no registrado";
assertion = JSON.stringify(output) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output)}`);
}
