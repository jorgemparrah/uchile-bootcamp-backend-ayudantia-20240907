import { Usuario } from "src/usuario/entities/usuario.entity";

export class Evento {

  constructor(
    public id: number,
    public nombre: string,
    public participantes: Usuario[],
    public organizador: Usuario
  ){}

}
