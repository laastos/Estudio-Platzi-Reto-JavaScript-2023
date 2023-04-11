export function protectDog(dog) {
  let dogCopy = Object.assign({}, dog);
  Object.freeze(dogCopy);
  for (let prop in dogCopy) {
    Object.freeze(dogCopy[prop]);
  }
  return dogCopy;
}

// Test
let input1 = {
  name: "Romeo",
  age: 3,
  owner: { name: "Victor", phoneNumber: "555-555-5555" },
  favoriteFood: ["pollito", "croquetas"],
  activities: ["jugar", "caminar"],
};

// Test 1
console.log('Test 1: Validar cambio de nombre');
let test1 = protectDog(input1);
test1.name = "Toro";
let output1 = "Romeo";
let calculated = test1.name;
assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}

// Test 2
console.log('Test 2: Validar cambio de nombre de dueño');
test1.owner.name = "Pedro";
output1 = "Victor";
calculated = test1.owner.name;
assertion = JSON.stringify(output1) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output1)}`);
}
