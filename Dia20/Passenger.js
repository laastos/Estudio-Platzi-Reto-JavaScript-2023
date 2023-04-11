import { Flight } from "./Flight.js";
import { EconomicFlight } from "./EconomicFlight.js";
import { PremiumFlight } from "./PremiumFlight.js";
import { Reservation } from "./Reservation.js";

export class Passenger {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.flights = [];
  }
}

// Tests
// Test 1
console.log('Test 1: Vuelo normal, validar datos del vuelo en el pasajero');
let flight = new Flight("CDMX", "Guadalajara", "2022-01-01", 5, 1000);
let passenger = new Passenger("Juan", "Perez", 30);
flight.sellTicket(passenger);
let calculated = passenger.flights;
let output1 = [
  {
    origin: "CDMX",
    destination: "Guadalajara",
    date: "2022-01-01",
    price: 1000,
  },
];
let assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}
// Test 2
console.log('Test 2: Vuelo normal, validar datos de pasajeros en el vuelo');
calculated = flight.passengers;
output1 = [
  {
    fullName: "Juan Perez",
    age: 30,
  },
];
assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}
// Test 3
console.log('Test 2: Vuelo económico, validar precio del tiquete en la reserva');
flight = new EconomicFlight("New York", "Paris", "2023-12-25", 100, 200);
passenger = new Passenger("Pedro", "Gutierrez", 17);
calculated = flight.sellTicket(passenger).flight.price;
output1 = 160;
assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}