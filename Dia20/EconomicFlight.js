import { Flight } from "./Flight.js";
import { Reservation } from "./Reservation.js";

export class EconomicFlight extends Flight {
  constructor(origin, destination, date, capacity, price) {
    super(origin, destination, date, capacity, price);
  }

  sellTicket(passenger) {
    let priceTemp = this.price;
    if (passenger.age < 18 || passenger.age > 65) {
      priceTemp -= this.price * 0.2;
    }
    if (this.capacity > 0) {
      this.capacity--;
      let flightTemp = {
        origin: this.origin,
        destination: this.destination,
        date: this.date,
        price: priceTemp,
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