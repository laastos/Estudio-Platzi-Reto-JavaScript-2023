import { Reservation } from "./Reservation";

export class Flight {
  constructor(origin, destination, date, capacity, price) {
    this.origin = origin;
    this.destination = destination;
    this.date = date;
    this.capacity = capacity;
    this.price = price;
    this.passengers = [];
  }

  sellTicket(passenger) {
    if (this.capacity > 0) {
      this.capacity--;
      let flightTemp = {
        origin: this.origin,
        destination: this.destination,
        date: this.date,
        price: this.price,
      };
      passenger.flights.push(flightTemp);
      let passengerTemp = {
        fullName: `${passenger.name} ${passenger.lastName}`,
        age: passenger.age,
      };
      this.passengers.push(passengerTemp);
      return new Reservation(flightTemp, passengerTemp);
    }
  }
}