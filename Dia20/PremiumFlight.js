import { Flight } from "./Flight";
import { Reservation } from "./Reservation";

export class PremiumFlight extends Flight {
  constructor(origin, destination, date, capacity, price, specialService) {
    super(origin, destination, date, capacity, price);
    this.specialService = specialService;
  }

  sellTicket(passenger) {
    if (this.capacity > 0) {
      this.capacity--;
      let flightTemp = {
        origin: this.origin,
        destination: this.destination,
        date: this.date,
        price: this.price + this.specialService,
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