import { doTask1, doTask2, doTask3 } from './tasks02.js';

function runCode() {
  const strings = [];
  return doTask1()
    .then((result) => {
      strings.push(result);
      return doTask2()
    })
    .then((result) => {
      strings.push(result);
      return doTask3()
    })
    .then((result) => {
      strings.push(result);
      return strings;
    });
}

runCode()
  .then((result) => console.log(result));