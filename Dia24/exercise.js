import { User } from "./User.js"

export class Task {
  constructor(id, description) {
    this.id = id;
    this.description = description;
    this.completed = false;
    this.users = [];
  }

  assignUser(user) {
    if (!(user instanceof User)) {
      throw new Error("No es un usuario valido");
    }
    this.users.push(user);
  }

  completeTask() {
    this.completed = true;
  }

  notifyUsers() {
    this.users.forEach(user => user.notify(this));
  }
}