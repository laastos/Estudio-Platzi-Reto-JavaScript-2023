export function getStudentAverage(students) {
  let totalAverage = 0;
  let averages = students.map((student) => {
    let average = student.grades.reduce((acc, grade) => acc + grade, 0);
    average /= student.grades.length;
    totalAverage += average;
    return {
      name: student.name,
      average: Number(average.toFixed(2)),
    }
  });
  return {
    classAverage: Number((totalAverage / students.length).toFixed(2)),
    students: averages,
  }
}

// Tests
// Test 1
console.log('Test 1: Obtener los promedios');
let input1 = [
  {
    name: "Pedro",
    grades: [90, 87, 88, 90],
  },
  {
    name: "Jose",
    grades: [99, 71, 88, 96],
  },
  {
    name: "Maria",
    grades: [92, 81, 80, 96],
  },
];
let calculated = getStudentAverage(input1);
let output = {
  classAverage: 88.17,
  students: [
    {
      name: "Pedro",
      average: 88.75
    },
    {
      name: "Jose",
      average: 88.5
    },
    {
      name: "Maria",
      average: 87.25
    }
  ]
};
let assertion = JSON.stringify(output) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output)}`);
}