import { Rol } from "./rol.enum";

export class Usuario {

  constructor(
    public id: number,
    public email: string,
    public nombre: string,
    public fechaNacimiento: Date,
    public rol: Rol
  ){}

}
