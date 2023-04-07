function validateForm(formData, registeredUsers) {
  let camposFaltantes = [];
  if (!formData.hasOwnProperty('name')) {
    camposFaltantes.push('name');
  }
  if (!formData.hasOwnProperty('lastname')) {
    camposFaltantes.push('lastname');
  }
  if (!formData.hasOwnProperty('email')) {
    camposFaltantes.push('email');
  }
  if (!formData.hasOwnProperty('password')) {
    camposFaltantes.push('password');
  }
  if (camposFaltantes.length > 0) {
    throw new Error(`Faltan los siguientes campos: ${camposFaltantes.join(', ')}`);
  }
  if (registeredUsers.every(user => user.email !== formData.email)) {
    registeredUsers.push({ name: formData.name, lastname: formData.lastname, email: formData.email });
    return `Tu registro fue exitoso ${formData.name} ${formData.lastname}`;
  } else {
    throw new Error(`El email ${formData.email} ya está en uso`)
  }
}

const formData = {
  name: "Juan",
  lastname: "Perez",
  email: "pedro@example.com",
  password: "123456"
}
const registeredUsers = [
  { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
  { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
]
console.log(validateForm(formData, registeredUsers));
