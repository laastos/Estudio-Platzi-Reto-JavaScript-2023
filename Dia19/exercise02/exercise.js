import { Cash } from "./Cash.class.js";
import { Card } from "./Card.class.js";
import { PayPal } from "./PayPal.class.js";

export function processPay(method, quantity) {
  return method.makePay(quantity);
}

// Tests
// Test 1
console.log('Test 1: Hacer un pago con tarjeta de crédito');
let card = new Card("4913478952471122");
let calculated = processPay(card, 100);
let output1 = {
  realized: true,
  quantity: 100,
  lastCardNumbers: "1122",
};
let assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}
// Test 2
console.log('Test 2: Hacer un pago con PayPal');
let paypal = new PayPal("test@mail.com");
calculated = processPay(paypal, 240);
output1 = {
  realized: true,
  quantity: 240,
  platform: "PayPal",
  email: "test@mail.com",
};
assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}
// Test 3
console.log('Test 3: Hacer un pago en efectivo');
let cash = new Cash();
calculated = processPay(cash, 400);
output1 = {
  realized: true,
  quantity: 400,
};
assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}
