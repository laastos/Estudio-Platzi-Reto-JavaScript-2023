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
var start = performance.now();
var products = [
  { name: "Smartphone", category: "Electronics", price: 800 },
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shirt", category: "Clothing", price: 50 },
  { name: "Pants", category: "Clothing", price: 100 },
];
console.log(`Respuesta esperada: { products: "Smartphone, Laptop", totalPrice: 2000, }`);
console.log("Respuesta obtenida");
console.log(groupProducts1(products, "Electronics"))
var end = performance.now();
console.log(`Execution time: ${end - start} ms`)
console.log("\n");

start = performance.now();
products = [
  { name: "Smartphone", category: "Electronics", price: 800 },
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shirt", category: "Clothing", price: 50 },
  { name: "Pants", category: "Clothing", price: 100 },
];
console.log(`Respuesta esperada: { products: "Shirt, Pants", totalPrice: 150, }`);
console.log("Respuesta obtenida");
console.log(groupProducts2(products, "Clothing"))
end = performance.now();
console.log(`Execution time: ${end - start} ms`)
console.log("\n\n\n");

start = performance.now();
products = [
  { name: "Smartphone", category: "Electronics", price: 800 },
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shirt", category: "Clothing", price: 50 },
  { name: "Pants", category: "Clothing", price: 100 },
];
console.log(`Respuesta esperada: { products: "Smartphone, Laptop", totalPrice: 2000, }`);
console.log("Respuesta obtenida");
console.log(groupProducts1(products, "Electronics"))
end = performance.now();
console.log(`Execution time: ${end - start} ms`)

start = performance.now();
products = [
  { name: "Smartphone", category: "Electronics", price: 800 },
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shirt", category: "Clothing", price: 50 },
  { name: "Pants", category: "Clothing", price: 100 },
];
console.log(`Respuesta esperada: { products: "Smartphone, Laptop", totalPrice: 2000, }`);
console.log("Respuesta obtenida");
console.log(groupProducts2(products, "Electronics"))
end = performance.now();
console.log(`Execution time: ${end - start} ms`)
console.log("\n\n");
