import { Task } from "./exercise.js";
import { Authorization } from "./Authorization.js";
import { User } from "./User.js";
import { TaskDecorator } from "./TaskDecorator.js";

export class TaskManager {
  constructor() {
    this.instance = null;
    this.tasks = [];
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new TaskManager();
    }
    return this.instance;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }

  getTaskById(id) {
    let taskTemp = this.tasks.find(task => task.id === id);
    return taskTemp === undefined ? null : taskTemp;
  }
}

// Tests
// Test 1
console.log('Test 1: Patrón Singleton TaskManager');
let taskManager1 = TaskManager.getInstance();
let taskManager2 = TaskManager.getInstance();
let calculated = taskManager1 === taskManager2;
let output = true;
let assertion = JSON.stringify(output) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output)}`);
}

// Test 2
console.log('Test 2: Agregar tarea y obtener tareas');
let taskManager = TaskManager.getInstance();
let mockTask = new Task(1, "Mock task")
taskManager.addTask(mockTask);
calculated = taskManager.getTasks();
output = [ { id: 1, description: 'Mock task', completed: false, users: [] } ];
assertion = JSON.stringify(output) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output)}`);
}

// Test 3
console.log('Test 3: Validar autorización');
let authorization = new Authorization();
let user1 = new User("Juan");
let user2 = new User("Maria");
let task = new Task('4', 'Comprar pan');
task.assignUser(user1);
try {
  calculated = authorization.checkAuthorization(user2, task);
} catch (err) {
  calculated = err.message;
}
output = "No autorizado";
assertion = JSON.stringify(output) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output)}`);
}
task.assignUser(user2);
task.notifyUsers();

// Test 4
console.log('Test 4: Uso de Decorator');
task = new Task('5', 'Pasear al perro');
let taskDecorator = new TaskDecorator(task, { deadline: '2023-03-31', priority: 'alta' });
calculated = JSON.parse(JSON.stringify(taskDecorator));
output = { task: task, deadline: '2023-03-31', priority: 'alta' };
assertion = JSON.stringify(output) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output)}`);
}
taskDecorator.assignUser(user1);
taskDecorator.assignUser(user2);
taskDecorator.notifyUsers();
