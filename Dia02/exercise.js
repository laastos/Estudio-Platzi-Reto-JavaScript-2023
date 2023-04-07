function calculateTip(billAmount, tipPercentage) {
  return billAmount * (tipPercentage / 100);
}

let input1 = 100;
let input2 = 10;
let output1 = 10;
let calculated = calculateTip(input1, input2)
console.log(`Result calculateTip for (${input1}, ${input2}) : ${calculated}`)
console.assert(calculated === output1, `Result should be ${output1}`);

input1 = 1524.33;
input2 = 25;
output1 = 381.0825;
calculated = calculateTip(1524.33, 25)
console.log(`Result calculateTip for (${input1}, ${input2}) : ${calculated}`)
console.assert(calculated === output1, `Result should be ${output1}`);
