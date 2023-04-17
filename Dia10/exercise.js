export function createTaskPlanner() {
  let tasks = [];
  function addTask(task) {
    task['completed'] = false;
    tasks.push(task);
  }
  function removeTask(value) {
    let taskIndex = tasks.findIndex(task => task.id === value || task.name === value);
    tasks.splice(taskIndex, 1);
  }
  function getTasks() {
    return tasks;
  }
  function getPendingTasks() {
    return tasks.filter(task => !task.completed);
  }
  function getCompletedTasks() {
    return tasks.filter(task => task['completed']);
  }
  function markTaskAsCompleted(value) {
    let task = tasks.find(task => task.id === value || task.name === value);
    task.completed = true;
  }
  function getSortedTasksByPriority() {
    let tasksTemp = JSON.parse(JSON.stringify(tasks));
    return tasksTemp.sort((a, b) => {
      if (a.priority > b.priority) return 1;
      else if (a.priority < b.priority) return -1;
      else return 0;
    });
  }
  function filterTasksByTag(tag) {
    return tasks.filter(task => task.tags.includes(tag));
  }
  function updateTask(taskId, updates) {
    let taskIndex = tasks.findIndex(task => task.id === taskId);
    tasks[taskIndex] = {...tasks[taskIndex], ...updates};
  }
  return {
    addTask,
    removeTask,
    getTasks,
    getPendingTasks,
    getCompletedTasks,
    markTaskAsCompleted,
    getSortedTasksByPriority,
    filterTasksByTag,
    updateTask,
  }
}


// Tests
let planner = createTaskPlanner();
// Test 1
console.log('Test 1: Marcar tarea como completada y obtener tareas completadas');
planner.addTask({
  id: 1,
  name: "Comprar leche",
  priority: 1,
  tags: ["shopping", "home"]
});
planner.addTask({
  id: 2,
  name: "Llamar a Juan",
  priority: 3,
  tags: ["personal"]
});
planner.markTaskAsCompleted("Llamar a Juan");
let calculated = planner.getCompletedTasks();
let output1 = [{
  id: 2,
  name: "Llamar a Juan",
  priority: 3,
  tags: ["personal"],
  completed: true,
}];
console.log(`Result: ${JSON.stringify(calculated)}`);
let assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}
// Test 2
console.log('Test 2: Filtrar tareas por tag');
planner.markTaskAsCompleted("Llamar a Juan");
calculated = planner.filterTasksByTag("shopping");
output1 = [{
  id: 1,
  name: "Comprar leche",
  priority: 1,
  tags: ["shopping", "home"],
  completed: false,
}];
console.log(`Result: ${JSON.stringify(calculated)}`);
assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}
// Test 3
console.log('Test 3: Ordenar tareas por prioridad');
calculated = planner.getSortedTasksByPriority();
output1 = [{"id":1,"name":"Comprar leche","priority":1,"tags":["shopping","home"],"completed":false},{"id":2,"name":"Llamar a Juan","priority":3,"tags":["personal"],"completed":true}];
console.log(`Result: ${JSON.stringify(calculated)}`);
assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}

// Test 4
console.log('Test 4: Actualizar tarea');
planner.updateTask(1, {notes:"Leche deslactosada", place: "supermercado"});
calculated = planner.getTasks();
output1 = [{id:1,name:"Comprar leche",priority:1,tags:["shopping","home"],completed:false,notes:"Leche deslactosada", place: "supermercado"},{"id":2,"name":"Llamar a Juan",priority:3,tags:["personal"],completed:true}];
console.log(`Result: ${JSON.stringify(calculated)}`);
assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}