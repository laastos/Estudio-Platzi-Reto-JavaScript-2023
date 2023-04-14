export function findFamousCats(cats) {
  let result = [];
  let maxFollowers = 0;
  cats.map((item) => {
    let total = item.followers.reduce((acc, element) => acc + element, 0);
    if (total > maxFollowers) {
      maxFollowers = total;
      result = [item.name];
    } else if (total == maxFollowers) {
      result.push(item.name);
    }
  });
  return result;
}

// Tests
// Test 1
console.log('Test 1: Obtener los gatos mas famosos');
let input1 = [
  {
    name: "Luna",
    followers: [500, 200, 300]
  },
  {
    name: "Michi",
    followers: [100, 300]
  },
];
let calculated = findFamousCats(input1);
let output = ["Luna"];
let assertion = JSON.stringify(output) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output)}`);
}
