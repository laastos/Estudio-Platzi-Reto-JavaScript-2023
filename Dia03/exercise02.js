function getPetExerciseInfo(type, age) {
  switch(type) {
    case 'perro':
      if (age < 1) {
        return "Los cachorros necesitan pequeñas y frecuentes sesiones de juego";
      } else if (age <= 7) {
        return "Los perros a esta edad necesitan caminatas diarias y sesiones de juego";
      } else {
        return "Los perros viejos necesitan caminatas más cortas";
      }
      break;
    case 'gato':
      if (age < 1) {
        return "Los gatitos necesitan frecuentes sesiones de juego";
      } else if (age <= 7) {
        return "Los gatos a esta edad necesitan jugar diariamente";
      } else {
        return "Los gatos viejos necesitan sesiones de juego más cortas";
      }
      break;
    case 'ave':
      if (age < 1) {
        return "Las aves jóvenes necesitan mucho espacio para volar";
      } else if (age <= 7) {
        return "Las aves necesitan jugar diariamente y un lugar para volar";
      } else {
        return "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar";
      }
      break;
    default:
      return "Tipo de mascota inválida"
  }
}

// Tests
var input1 = "perro";
var input2 = 3;
var output1 = "Los perros a esta edad necesitan caminatas diarias y sesiones de juego";
var calculated = getPetExerciseInfo(input1, input2);
console.log(`Result getPetExerciseInfo for (${input1}, ${input2}): ${calculated}`)
console.assert(calculated === output1, `Result should be ${output1}`);

input1 = "gato";
input2 = 8;
output1 = "Los gatos viejos necesitan sesiones de juego más cortas";
calculated = getPetExerciseInfo(input1, input2);
console.log(`Result getPetExerciseInfo for (${input1}, ${input2}): ${calculated}`)
console.assert(calculated === output1, `Result should be ${output1}`);

input1 = "Mamut";
input2 = 25;
output1 = "Tipo de mascota inválida";
calculated = getPetExerciseInfo(input1, input2);
console.log(`Result getPetExerciseInfo for (${input1}, ${input2}): ${calculated}`)
console.assert(calculated === output1, `Result should be ${output1}`);
