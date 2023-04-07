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

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

const value = 1;

result = searchValue(array, value);
console.log(result);