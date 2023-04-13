import { Subscriber } from "./Subscriber.js";

export class Newsletter {
  constructor() {
    this.subscribers = [];
  }
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
  unsubscribe(email) {
    let index = this.subscribers.indexOf((element) => element.email === email);
    this.subscribers.splice(index, 1);
  }
  post(article) {
    this.subscribers.forEach((element) => element.receive(article));
  }
}

// Tests
let newsletter = new Newsletter();
let subscriber1 = new Subscriber("pepe@mail.com");
let subscriber2 = new Subscriber("juanito@mail.com");
let subscriber3 = new Subscriber("pedro@mail.com");
let article = {
  title: "30 días de js",
  content: "Aprende js en 30 días"
}
// Test 1
console.log('Test 1: Enviar post a suscriptores');
newsletter.subscribe(subscriber1);
newsletter.subscribe(subscriber2);
newsletter.subscribe(subscriber3);
newsletter.post(article);