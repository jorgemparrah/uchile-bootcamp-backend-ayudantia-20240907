import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { Rol } from '../entities/rol.enum';
import { Usuario } from '../entities/usuario.entity';

@Injectable()
export class UsuarioService {

  usuarios : Usuario[];

  constructor() {
    this.usuarios = [
      new Usuario(1, "uadministrador_00@gmail.com", "Administrador 00", new Date("2000-09-07"), Rol.ADMINISTRADOR),
      new Usuario(2, "uadministrador_01@gmail.com", "Administrador 01", new Date("2000-09-07"), Rol.ADMINISTRADOR),
      new Usuario(50, "uorganizador_01@gmail.com", "Organizador 01", new Date("2000-09-07"), Rol.ORGANIZADOR),
      new Usuario(8000, "uparticipante_02@gmail.com", "Participante 02", new Date("2000-09-07"), Rol.PARTICIPANTE),
      new Usuario(8001, "uparticipante_03@gmail.com", "Participante 03", new Date("2000-09-07"), Rol.PARTICIPANTE),
      new Usuario(8002, "uparticipante_04@gmail.com", "Participante 04", new Date("2000-09-07"), Rol.PARTICIPANTE),
      new Usuario(8003, "uparticipante_05@gmail.com", "Participante 05", new Date("2000-09-07"), Rol.PARTICIPANTE),
      new Usuario(8004, "uparticipante_06@gmail.com", "Participante 06", new Date("2000-09-07"), Rol.PARTICIPANTE),
      new Usuario(8005, "uparticipante_07@gmail.com", "Participante 07", new Date("2000-09-07"), Rol.PARTICIPANTE),
      new Usuario(8006, "uparticipante_08@gmail.com", "Participante 08", new Date("2000-09-07"), Rol.PARTICIPANTE),
      new Usuario(8007, "uparticipante_09@gmail.com", "Participante 09", new Date("2000-09-07"), Rol.PARTICIPANTE),
      new Usuario(8008, "uparticipante_10@gmail.com", "Participante 10", new Date("2000-09-07"), Rol.PARTICIPANTE),
      new Usuario(8009, "uparticipante_11@gmail.com", "Participante 11", new Date("2000-09-07"), Rol.PARTICIPANTE),
      new Usuario(8010, "uparticipante_12@gmail.com", "Participante 12", new Date("2000-09-07"), Rol.PARTICIPANTE),
      new Usuario(8011, "uparticipante_13@gmail.com", "Participante 13", new Date("2000-09-07"), Rol.PARTICIPANTE),
      new Usuario(8012, "uparticipante_14@gmail.com", "Participante 14", new Date("2000-09-07"), Rol.PARTICIPANTE),
      new Usuario(8013, "uparticipante_15@gmail.com", "Participante 15", new Date("2000-09-07"), Rol.PARTICIPANTE),
      new Usuario(8014, "uparticipante_16@gmail.com", "Participante 16", new Date("2000-09-07"), Rol.PARTICIPANTE),
      new Usuario(8015, "uparticipante_17@gmail.com", "Participante 17", new Date("2000-09-07"), Rol.PARTICIPANTE),
      new Usuario(8016, "uparticipante_18@gmail.com", "Participante 18", new Date("2000-09-07"), Rol.PARTICIPANTE),
      new Usuario(8017, "uparticipante_19@gmail.com", "Participante 19", new Date("2000-09-07"), Rol.PARTICIPANTE),
      new Usuario(8018, "uparticipante_20@gmail.com", "Participante 20", new Date("2000-09-07"), Rol.PARTICIPANTE),
    ]
  }

  create(createUsuarioDto: CreateUsuarioDto) {
    return 'This action adds a new usuario';
  }

  findAll() {
    return `This action returns all usuario`;
  }

  findOne(id: number) {
    const encontrado = this.usuarios.find(u => u.id === id);
    return encontrado;
  }

  findByRol(rol: Rol) {
    const encontrado : Usuario[] = this.usuarios.filter(u => u.rol === rol);
    return encontrado;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
