import { User } from './User.js';

export class Authorization {
  checkAuthorization(user, task) {
    if (!(user instanceof User)) {
      throw new Error("No es un usuario valido");
    }
    if (!task.users.includes(user)) {
      throw new Error("No autorizado");
    }
    return "Autorizado";
  }
}