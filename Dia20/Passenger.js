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
console.log('Test 1: Vuelo normal');
let flight = new Flight("CDMX", "Guadalajara", "2022-01-01", 5, 1000);
let passenger = new Passenger("Juan", "Perez", 30);
let reservation = flight.sellTicket(passenger);
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