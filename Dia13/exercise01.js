function groupProducts1(products, category) {
  let productsNames = [], productsTotal = 0;
  products.forEach((product) => {
    if (product.category === category) {
      productsNames.push(product.name);
      productsTotal += product.price;
    }
  });
  return {
    products: productsNames.join(', '),
    totalPrice: productsTotal
  }
}

function groupProducts2(products, category) {
  const products1 = products.filter(prod => prod.category === category);
  const prodName = products1.map(prod => prod.name).join(', ');
  const sumPrices = products1.map(prod => prod.price).reduce((sum, curr) => sum + curr);
  return {
    products: prodName,
    totalPrice: sumPrices
  }
}

// Tests
function testExercise(input1, input2, output1, testFunction) {
  let start = performance.now();
  console.log(`Respuesta esperada: ${JSON.stringify(output1)}`);
  let calculated = testFunction(input1, input2)
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

testExercise([
  { name: "Smartphone", category: "Electronics", price: 800 },
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shirt", category: "Clothing", price: 50 },
  { name: "Pants", category: "Clothing", price: 100 },
], "Electronics", { products: "Smartphone, Laptop", totalPrice: 2000 }, groupProducts1);

testExercise([
  { name: "Smartphone", category: "Electronics", price: 800 },
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shirt", category: "Clothing", price: 50 },
  { name: "Pants", category: "Clothing", price: 100 },
], "Clothing", { products: "Shirt, Pants", totalPrice: 150 }, groupProducts2);

testExercise([
  { name: "Smartphone", category: "Electronics", price: 800 },
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shirt", category: "Clothing", price: 50 },
  { name: "Pants", category: "Clothing", price: 100 },
], "Electronics", { products: "Smartphone, Laptop", totalPrice: 2000 }, groupProducts1);

testExercise([
  { name: "Smartphone", category: "Electronics", price: 800 },
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shirt", category: "Clothing", price: 50 },
  { name: "Pants", category: "Clothing", price: 100 },
], "Electronics", { products: "Smartphone, Laptop", totalPrice: 2000 }, groupProducts2);