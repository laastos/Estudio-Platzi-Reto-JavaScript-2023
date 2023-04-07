export function sendEmail(email, subject, body) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === undefined || email === null || email === '') {
        reject(new Error("Error: Hacen falta campos para enviar el email"));
      }
      if (subject === undefined || subject === null || subject === '') {
        reject(new Error("Error: Hacen falta campos para enviar el email"));
      }
      if (body === undefined || body === null || body === '') {
        reject(new Error("Error: Hacen falta campos para enviar el email"));
      }
      resolve({ email, subject, body });
    }, 2000);
  });
}

// Tests
var input1 = "test@mail.com";
var input2 = "Reto 30";
var input3 = "Únete a los 30 días de JS";
var output1 = {
  email: "test@mail.com",
  subject: "Nuevo reto",
  body:  "Únete a los 30 días de JS",
};
sendEmail(input1, input2, input3)
  .then(result => test1(result))
  .catch(error => test1(error));
function test1(calculated) {
  console.log(calculated);
  console.log(`Result sendEmail for (${input1}, ${input2}, ${input3}): ${calculated}`)
  console.assert(calculated == output1, `Result should be ${output1}`);
}
