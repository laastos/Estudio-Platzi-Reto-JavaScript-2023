export function taskManager() {
  let tasks = new Map();
  function addTask(task, tags) {
    if (!tasks.has(task.toLowerCase())) {
      tasks.set(task.toLowerCase(), new Set(tags));
    } else {
      tasks.set(task.toLowerCase(), new Set([...tasks.get(task.toLowerCase()), ...tags]));
    }
    return this;
  }
  function printTasks() {
    return tasks;
  }
  return {
    addTask,
    printTasks,
  }
}

// Tests
let myTaskManager = taskManager()
  .addTask("Comprar leche", ["compras", "urgente"])
  .addTask("Sacar al perro", ["mascotas"])
  .addTask("Hacer ejercicio", ["salud"]);
// Test 1
console.log('Test 1: Crear lista de tareas y obtener los datos');
let calculated = myTaskManager.printTasks();
let output = new Map([
  ['comprar leche', new Set(['compras', 'urgente'])],
  ['sacar al perro', new Set(['mascotas'])],
  ['hacer ejercicio', new Set(['salud'])]
]);
let assertion = JSON.stringify(output) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output)}`);
}
// Test 2
console.log('Test 2: Agregar tarea repetida y obtener los datos');
calculated = myTaskManager.printTasks();
output = new Map([
  ['comprar leche', new Set(['compras', 'urgente', 'lácteos'])],
  ['sacar al perro', new Set(['mascotas'])],
  ['hacer ejercicio', new Set(['salud'])]
]);
assertion = JSON.stringify(output) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output)}`);
}
