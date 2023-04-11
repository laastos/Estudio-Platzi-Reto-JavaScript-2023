import { Product } from "./products.js";

export class Article extends Product {
  addToCart(name, quantity) {
    return `Agregando ${this.quantity} unidades del artículo ${this.name} al carrito`
  }
}

export class Service extends Product {
  addToCart() {
    return `Agregando el servicio ${this.name} al carrito`
  }
}

export class Cart {
  products = [];
  addProduct(product) {
    this.products.push(product);
    return product.addToCart();
  }
  deleteProduct(product) {
    let productIndex = this.products.findIndex((element) => element.name === product.name);
    this.products.splice(productIndex, 1);
  }
  calculateTotal() {
    return this.products.reduce((acc, element) => acc + (element.price * element.quantity), 0);
  }
  getProducts() {
    return this.products;
  }
}

// Tests
let book = new Article("Libro", 100, 2);
let course = new Service("Curso", 120, 1);
let cart = new Cart();
console.log(cart.addProduct(book));
console.log(cart.addProduct(course));
// Test 1
console.log('Test 1: Calcular el total del carrito');
let calculated = cart.calculateTotal();
let output1 = 320;
let assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}
