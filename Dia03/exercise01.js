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
var input1 = 2000;
var output1 = true;
var calculated = isLeapYear(input1);
console.log(`Result isLeapYear for ${input1}: ${calculated}`)
console.assert(calculated === output1, `Result should be ${output1}`);

input1 = -2024;
output1 = false;
calculated = isLeapYear(input1)
console.log(`Result isLeapYear for ${input1}: ${calculated}`)
console.assert(calculated === output1, `Result should be ${output1}`);

input1 = 1984.25;
output1 = false;
calculated = isLeapYear(input1)
console.log(`Result isLeapYear for ${input1}: ${calculated}`)
console.assert(calculated === output1, `Result should be ${output1}`);