function arrayModified() {
  Array.prototype.myFilter = function (callback) {
    let filtered = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        filtered.push(this[i]);
      }
    }
    return filtered;
  }
}

// Tests
arrayModified()
// Test 1
console.log('Test 1: Validar filtrado');
let input1 = [0,1,2,3];
let calculated = input1.myFilter(num => num > 1);
let output1 = [2,3];
assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}
