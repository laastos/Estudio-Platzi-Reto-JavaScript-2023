function hotelSystem(rooms) {
  let roomsNumber = rooms;
  let reservations = [];
  function searchReservation(id) {
    let reservation = reservations.find((element) => element.id === id);
    if (reservation === undefined) {
      throw new Error('La reservación no fue encontrada');
    }
    return reservation;
  }
  function getSortReservations() {
    let dateActual = new Date();
    let reservationsTemp = JSON.parse(JSON.stringify(reservations));
    return reservationsTemp.sort((a, b) => {
      let aCheckIn = new Date(dateActual.getFullYear(), Number.parseInt(a.checkIn.split('/')[1]) - 1, a.checkIn.split('/')[0]);
      let bCheckIn = new Date(dateActual.getFullYear(), Number.parseInt(b.checkIn.split('/')[1]) - 1, b.checkIn.split('/')[0]);
      if (aCheckIn.getTime() > bCheckIn.getTime()) {
        return 1;
      } else if (aCheckIn.getTime() < bCheckIn.getTime()) {
        return -1;
      }
      return 0;
    });
  }
  function addReservation(reservation) {
    if (isRoomAvailable(reservation.roomNumber, reservation.checkIn, reservation.checkOut)) {
      reservations.push(reservation);
      return 'Habitación agregada exitosamente';
    } else {
      throw new Error('La habitación no está disponible');
    }
  }
  function removeReservation(id=undefined) {
    let reservationIndex = reservations.findIndex((element) => element.id === id);
    if (reservationIndex === -1) {
      throw new Error('La reservación que se busca remover no existe');
    }
    let reservationsRemoved = reservations.splice(reservationIndex, 1);
    return reservationsRemoved[0];
  }
  function getReservations() {
    return reservations;
  }
  function getAvailableRooms(checkIn, checkOut) {
    let availableRooms = [];
    for (let i = 1; i <= roomsNumber; i++) {
      if (isRoomAvailable(i, checkIn, checkOut)) {
        availableRooms.push(i);
      }
    }
    return availableRooms;
  }
  function isRoomAvailable(roomNumber, checkIn, checkOut) {
    let available = true;
    // Crea un objeto de fecha
    let dateActual = new Date();
    // Rango de fechas a evaluar
    let rangeCheckIn = new Date(dateActual.getFullYear(), Number.parseInt(checkIn.split('/')[1]) - 1, Number.parseInt(checkIn.split('/')[0]));
    let rangeCheckOut = new Date(dateActual.getFullYear(), Number.parseInt(checkOut.split('/')[1]) - 1, Number.parseInt(checkOut.split('/')[0]));
    // Filtra las reservas activas de la habitacion
    let reservationsActive = reservations.filter((element) => element.roomNumber === roomNumber);
    // Valida si esta disponible
    if (reservationsActive.length > 0) {
      available = reservationsActive.every((element) => {
        // Objetos Date de reserva
        let checkInTemp = new Date(dateActual.getFullYear(), Number.parseInt(element.checkIn.split('/')[1]) - 1, Number.parseInt(element.checkIn.split('/')[0]));
        let checkOutTemp = new Date(dateActual.getFullYear(), Number.parseInt(element.checkOut.split('/')[1]) - 1, Number.parseInt(element.checkOut.split('/')[0]));
        // Compara los rangos
        // Si el checkIn del rango evaluado es menor al checkOut de la reserva guardada
        // Y si el checkIn de la reserva guardada es menor que el checkOut del rango evaluado
        // Entonces los rangos se superponen
        if ((rangeCheckIn.getTime() < checkOutTemp.getTime())
        && (checkInTemp.getTime() < rangeCheckOut.getTime())) {
          return false;
        }
        return true;
      });
    }
    return available;
  }
  return {
    searchReservation,
    getSortReservations,
    addReservation,
    removeReservation,
    getReservations,
    getAvailableRooms
  }
}

// Tests
let hotel = hotelSystem(10);
hotel.addReservation({
  id: 1,
  name: "John Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 1,
});
hotel.addReservation({
  id: 2,
  name: "Pepe Doe",
  checkIn: "01/01",
  checkOut: "10/01",
  roomNumber: 9,
});
hotel.addReservation({
  id: 3,
  name: "Soloman",
  checkIn: "01/01",
  checkOut: "05/01",
  roomNumber: 8,
});
hotel.addReservation({
  id: 4,
  name: "Peppa Pig",
  checkIn: "10/01",
  checkOut: "13/01",
  roomNumber: 9,
});
// Test 1
console.log('Test 1: Obtener las reservaciones');
let output1 = [
  {
    id: 1,
    name: "John Doe",
    checkIn: "01/01",
    checkOut: "02/01",
    roomNumber: 1,
  },
  {
    id: 2,
    name: "Pepe Doe",
    checkIn: "01/01",
    checkOut: "10/01",
    roomNumber: 9,
  },
  {
    id: 3,
    name: "Soloman",
    checkIn: "01/01",
    checkOut: "05/01",
    roomNumber: 8,
  },
  {
    id: 4,
    name: "Peppa Pig",
    checkIn: "10/01",
    checkOut: "13/01",
    roomNumber: 9,
  }
];
let calculated = hotel.getReservations();
let assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}

// Test 2
console.log('Test 2: Obtener la reserva con id => 2');
calculated = hotel.searchReservation(2);
output1 = {
  id: 2,
  name: "Pepe Doe",
  checkIn: "01/01",
  checkOut: "10/01",
  roomNumber: 9,
};
assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}

// Test 3
console.log('Test 3: Obtener las reservaciones ordenadas por fecha de checkIn');
calculated = hotel.getSortReservations();
output1 = [
  {
    id: 1,
    name: "John Doe",
    checkIn: "01/01",
    checkOut: "02/01",
    roomNumber: 1,
  },
  {
    id: 2,
    name: "Pepe Doe",
    checkIn: "01/01",
    checkOut: "10/01",
    roomNumber: 9,
  },
  {
    id: 3,
    name: "Soloman",
    checkIn: "01/01",
    checkOut: "05/01",
    roomNumber: 8,
  },
  {
    id: 4,
    name: "Peppa Pig",
    checkIn: "10/01",
    checkOut: "13/01",
    roomNumber: 9,
  }
];
assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}

// Test 4
console.log('Test 4: Elimina una reserva');
hotel.removeReservation(3);
calculated = hotel.removeReservation(4);
output1 = {
  id: 4,
  name: "Peppa Pig",
  checkIn: "10/01",
  checkOut: "13/01",
  roomNumber: 9,
};
assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}

// Test 5
console.log('Test 5: Obtiene las habitaciones disponibles en un rango de fechas');
calculated = hotel.getAvailableRooms("01/01", "30/01");
output1 = [2,3,4,5,6,7,8,10];
assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}

// Test 6
console.log('Test 6: Agregar una reserva de una habitación no disponible en unas fechas');
try {
  hotel.addReservation({
    id: 4,
    name: "Peppa Pong",
    checkIn: "01/01",
    checkOut: "07/01",
    roomNumber: 1,
  });
} catch (err) {
  calculated = err.message;
}
output1 = 'La habitación no está disponible';
assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}
