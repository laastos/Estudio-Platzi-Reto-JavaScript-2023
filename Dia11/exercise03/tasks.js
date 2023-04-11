export function doTask1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Task 1'), 300);
  });
}

export function doTask2(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Task 2'), 300);
  });
}

export function doTask3(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Task 3'), 300);
  });
}
