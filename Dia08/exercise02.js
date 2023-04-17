export function myMap(array, func) {
  let arrayTemp = [];
  array.forEach((item) => {
    arrayTemp.push(func(item));
  });
  return arrayTemp;
}

// Tests
// Test 1
console.log('Test 1: Aplicar función myMap');
let input1 = [1,2,3,4];
let calculated = myMap(input1, (num) => num * 2);
let output1 = [2,4,6,8];
let assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}
// Test 2
console.log('Test 2: Aplicar función myMap');
input1 = [ {name: "michi", age: 2}, {name: "firulais", age: 6} ];
calculated = myMap(input1, (pet) => pet.name);
output1 = ["michi", "firulais"];
assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}