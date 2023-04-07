function printTriangle(size, character) {
  let string = '', i, j;
  for (i = 1; i <= size; i++) {
    for (j = 1; j <= (size - i); j++) {
      string += ' ';
    }
    for (j = 1; j <= i; j++) {
      string += character;
    }
    if (i < size) {
      string += '\n';
    }
  }
  return string;
}

// Tests
input1 = 5;
input2 = "*";
output1 = 
`    *
   **
  ***
 ****
*****`;
calculated = printTriangle(input1, input2);
console.log(`Result printTriangle for (${input1}, ${input2}): ${calculated}`)
console.assert(calculated === output1, `Result should be ${output1}`);
