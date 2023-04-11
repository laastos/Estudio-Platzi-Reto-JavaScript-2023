import { Product } from "./product.js";
import { WarrantyDecorator } from "./WarrantyDecorator.js";
import { ShippingInsuranceDecorator } from "./ShippingInsuranceDecorator.js";

export class BasicProduct extends Product {
  constructor(price, description) {
    super(price);
    this.description = description;
  }

  getDescription() {
    return this.description;
  }
}

// Tests
// Test 1
console.log('Test 1: Creación de producto con garantía y seguro de envío');
let basicProduct = new BasicProduct(100, "Camisa de algodón");
let withWarranty = new WarrantyDecorator(basicProduct);
let withShippingInsurance = new ShippingInsuranceDecorator(withWarranty);
let calculated = {price: withShippingInsurance.getPrice(), description: withShippingInsurance.getDescription()};
let output1 = {price: 140, description: "Camisa de algodón con garantía con seguro de envío"};
let assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}
// Test 2
console.log('Test 2: Creación de producto con garantía');
basicProduct = new BasicProduct(5000, "Refrigerador");
withWarranty = new WarrantyDecorator(basicProduct);
withShippingInsurance = new ShippingInsuranceDecorator(withWarranty);
calculated = {price: withWarranty.getPrice(), description: withWarranty.getDescription()};
output1 = {price: 5020, description: "Refrigerador con garantía"};
assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}