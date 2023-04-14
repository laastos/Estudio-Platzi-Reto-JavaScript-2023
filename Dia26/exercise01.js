export function removeDuplicates(values) {
  return values.reduce((acc, item) => {
    if (acc.indexOf(item) === -1) {
      acc.push(item)
    }
    return acc;
  }, []);
}

export function removeDuplicates2(values) {
  return [...new Set(values)];
}

// Tests
// Test 1
console.log('Test 1: Crear array y remover duplicados');
let input1 = [ "melon", "melon", "mango", "banana", "apple", "banana", "apple", ];
let calculated = removeDuplicates2(input1);
let output = ["melon", "mango", "banana", "apple"];
let assertion = JSON.stringify(output) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output)}`);
}
// Test 2
console.log('Test 2: Crear array y remover duplicados');
input1 = [ 1, 2, 3, 1, 2, 3, ];
calculated = removeDuplicates2(input1);
output = [1, 2, 3];
assertion = JSON.stringify(output) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output)}`);
}