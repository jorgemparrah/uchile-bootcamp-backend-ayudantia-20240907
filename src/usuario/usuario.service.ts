import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { Rol } from './entities/rol.enum';

@Injectable()
export class UsuarioService {

  usuarios;

  constructor() {
    this.usuarios = [
      new Usuario(1, Rol.ADMINISTRADOR),
      new Usuario(50, Rol.ORGANIZADOR),
      new Usuario(8000, Rol.PARTICIPANTE),
      new Usuario(8001, Rol.PARTICIPANTE),
      new Usuario(8002, Rol.PARTICIPANTE),
      new Usuario(8003, Rol.PARTICIPANTE),
      new Usuario(8004, Rol.PARTICIPANTE),
      new Usuario(8005, Rol.PARTICIPANTE),
      new Usuario(8006, Rol.PARTICIPANTE),
      new Usuario(8007, Rol.PARTICIPANTE),
      new Usuario(8008, Rol.PARTICIPANTE),
      new Usuario(8009, Rol.PARTICIPANTE),
      new Usuario(8010, Rol.PARTICIPANTE),
      new Usuario(8011, Rol.PARTICIPANTE),
      new Usuario(8012, Rol.PARTICIPANTE),
      new Usuario(8013, Rol.PARTICIPANTE),
      new Usuario(8014, Rol.PARTICIPANTE),
      new Usuario(8015, Rol.PARTICIPANTE),
      new Usuario(8016, Rol.PARTICIPANTE),
      new Usuario(8017, Rol.PARTICIPANTE),
      new Usuario(8018, Rol.PARTICIPANTE),

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

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
