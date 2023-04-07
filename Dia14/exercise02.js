function sortByAvailabilityAndPrice(products) {
  let productsTemp = JSON.parse(JSON.stringify(products));
  productsTemp.sort((a, b) => {
    if (a.inStock && b.inStock) {
      if (a.price > b.price) {
        return 1;
      }
      return -1;
    } else if (a.inStock) {
      return -1;
    } else if (b.inStock) {
      return 1;
    } else if (a.price > b.price) {
      return 1;
    }
    return -1;
  });
  return productsTemp;
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

testExercise(products = [
  { name: "product1", price: 10, inStock: true },
  { name: "product2", price: 20, inStock: false },
  { name: "product3", price: 15, inStock: true },
  { name: "product4", price: 5, inStock: false },
], [
  { name: "product1", price: 10, inStock: true },
  { name: "product3", price: 15, inStock: true },
  { name: "product4", price: 5, inStock: false },
  { name: "product2", price: 20, inStock: false },
], sortByAvailabilityAndPrice);