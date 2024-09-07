import { Rol } from "./rol.enum";

export class Usuario {

  constructor(
    public id: number,
    public rol: Rol
  ){}

}
