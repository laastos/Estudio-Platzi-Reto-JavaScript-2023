export class Car {
  constructor (brand, model, year, mileage) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.state = false;
  }
  turnOn() {
    this.state = true;
  }
  turnOff() {
    this.state = false;
  }
  drive(kilometers) {
    if (this.state) {
      this.mileage += kilometers;
    } else {
      throw new Error("El auto está apagado");
    }
  }
}

// Tests
let toyota = new Car("Toyota", "Corolla", 2020, 0);
// Test 1
toyota.turnOn();
toyota.drive(100);
console.log('Test 1: Conducir 100 km con auto encendido');
let calculated = toyota.mileage;
let output1 = 100;
let assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}
// Test 2
toyota.turnOff();
console.log('Test 2: Conducir 100 km con auto apagado');
try {
  toyota.drive(100);
} catch (Error) {
  calculated = Error.message;
}
output1 = "El auto está apagado";
assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}
