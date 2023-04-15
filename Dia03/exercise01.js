function isLeapYear(year) {
  if (year < 0) {
    return false;
  }
  if (!Number.isInteger(year)) {
    return false;
  }
  if (
    ((year % 4 == 0) && !(year % 100 == 0))
    || ((year % 100 == 0) && (year % 400 == 0))
  ) {
    return true;
  } else {
    return false;
  }
}

// Tests
// Test 1
console.log('Test 1: Prueba de bisiesto')
let input1 = 2000;
let output1 = true;
let calculated = isLeapYear(input1);
console.log(`Result isLeapYear for ${input1}: ${calculated}`)
console.assert(calculated === output1, `Result should be ${output1}`);

// Test 2
console.log('Test 2: Prueba de bisiesto')
input1 = -2024;
output1 = false;
calculated = isLeapYear(input1)
console.log(`Result isLeapYear for ${input1}: ${calculated}`)
console.assert(calculated === output1, `Result should be ${output1}`);

// Test 3
console.log('Test 3: Prueba de bisiesto')
input1 = 1984.25;
output1 = false;
calculated = isLeapYear(input1)
console.log(`Result isLeapYear for ${input1}: ${calculated}`)
console.assert(calculated === output1, `Result should be ${output1}`);