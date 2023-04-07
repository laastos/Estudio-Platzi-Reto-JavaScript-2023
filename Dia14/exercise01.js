function processShoppingList(list) {
  let total = 0;
  list = list.map((element) => {
    if (element.name.includes('oferta')) {
      element.price -= element.price * 0.2;
    }
    total += element.price * element.quantity;
    element.price = element.price * element.quantity;
    delete element.quantity;
    return element;
  });
  return total;
}

// Tests
function testExercise(input1, output1, testFunction) {
  let start = performance.now();
  console.log(`Respuesta esperada: ${JSON.stringify(output1)}`);
  let calculated = testFunction(input1)
  console.log(`Respuesta obtenida ${JSON.stringify(calculated)}`);
  let assertion = JSON.stringify(output1) === JSON.stringify(calculated);
  if (assertion) {
    console.log("Assertion passed");
  } else {
    console.log(`Assertion failed: Result should be ${output1}`);
  }
  let end = performance.now();
  console.log(`Execution time: ${end - start} ms`)
  console.log("\n");
}

let input1 = [
  { name: "pan", price: 20, quantity: 2 },
  { name: "leche", price: 25, quantity: 1 },
  { name: "oferta manzanas", price: 10, quantity: 3 },
]
testExercise(input1, 89, processShoppingList);
console.log(input1);