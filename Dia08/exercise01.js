export function createCalculator() {
  let total = 0;
  return {
    add: (x) => total += x,
    subtract: (x) => total -= x,
    multiply: (x) => total *= x,
    divide: (x) => total /= x,
    clear: () => total = 0,
    getTotal: () => total,
  }
}

// Tests
let calculator = createCalculator();
// Test 1
console.log('Test 1: Suma');
calculator.add(10);
let calculated = calculator.getTotal();
let output1 = 10;
console.log(`Result for add(): ${calculated}`)
let assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}