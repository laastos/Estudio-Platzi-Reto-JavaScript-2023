import { doTask1, doTask2, doTask3 } from './tasks03.js';

async function runCode() {
  const strings = [];
  const promise1 = await doTask1();
  strings.push(promise1);
  const promise2 = await doTask2();
  strings.push(promise2);
  const promise3 = await doTask3();
  strings.push(promise3);
  return strings;
}

// Tests
var output1 = new Array('Task 1', 'Task 2', 'Task 3');
var calculated = await runCode();
console.log(calculated);
console.log(`Result runCode : ${calculated}`)
console.assert(calculated == output1, `Result should be ${output1}`);