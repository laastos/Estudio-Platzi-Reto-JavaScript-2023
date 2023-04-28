import { Mail } from "./mail.js";

export class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(from, to, body, subject) {
    let newMail = new Mail(from, to, body, subject);
    if (this.length === 0) {
      this.first = newMail;
      this.last = newMail;
    } else {
      this.last.next = newMail;
      this.last = newMail;
    }
    this.length++;
  }

  dequeue() {
    if (this.length === 0) {
      throw new Error("No hay emails");
    }

    let removedMail = this.first;
    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.length--;

    return {
      from: removedMail.from,
      to: removedMail.to,
      body: removedMail.body,
      subject: removedMail.subject,
    };
  }

  peek() {
    return {
      from: this.first.from,
      to: this.first.to,
      body: this.first.body,
      subject: this.first.subject,
    };
  }

  size() {
    return this.length;
  }
}
