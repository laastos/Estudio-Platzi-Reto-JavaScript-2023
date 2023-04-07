function searchValue(array, value) {
  let rows = array.length;
  let columns = array[0].length;
  let index = array.flat().findIndex(element => element === value);
  let indexRow = Number.parseInt(index / rows);
  let indexColumn = index % columns;
  if (index !== -1) {
    return { row: indexRow, column: indexColumn };
  } else {
    throw new Error("Valor no encontrado");
  }
}

let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

// Tests
function testExercise(input1, input2, output1, testFunction) {
  let start = performance.now();
  console.log(`Respuesta esperada: ${JSON.stringify(output1)}`);
  let calculated = testFunction(input1, input2)
  console.log(`Respuesta obtenida ${JSON.stringify(calculated)}`);
  let assertion = JSON.stringify(output1) === JSON.stringify(calculated);
  if (assertion) {
    console.log("Assertion passed");
  } else {
    console.log(`Assertion failed: Result should be ${output1}`);
  }
  let end = performance.now();
  console.log(`Execution time: ${end - start} ms`)
  console.log("\n");
}

testExercise([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
], 1, { row: 0, column: 0 }, searchValue);