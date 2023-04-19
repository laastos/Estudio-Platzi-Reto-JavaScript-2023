import { Task } from "./exercise.js";

export class TaskBuilder {
  constructor() {
    this.task = new Task();
    this.task.deadline = null;
    this.task.priority = null;
  }

  setId(id) {
    this.task.id = id;
    return this;
  }

  setDescription(description) {
    this.task.description = description;
    return this;
  }

  setCompleted(completed) {
    this.task.completed = completed;
    return this;
  }

  setUsers(users) {
    this.task.users = [...users];
    return this;
  }

  setDeadline(deadline) {
    this.task.deadline = deadline;
    return this;
  }

  setPriority(priority) {
    this.task.priority = priority;
    return this;
  }

  build() {
    return this.task;
  }
}
