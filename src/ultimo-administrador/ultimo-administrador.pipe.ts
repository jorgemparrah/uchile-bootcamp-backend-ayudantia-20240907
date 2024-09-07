import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { Rol } from 'src/usuario/entities/rol.enum';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class UltimoAdministradorPipe implements PipeTransform {

  constructor(private readonly usuarioService: UsuarioService) {}

  transform(value: number, metadata: ArgumentMetadata) {
    console.log('UltimoAdministradorPipe', value);
    const idPorEliminar = value;
    const usuarioAEliminar = this.usuarioService.findOne(idPorEliminar);
    if (usuarioAEliminar.rol === Rol.ADMINISTRADOR) {
      const administradores = this.usuarioService.findByRol(Rol.ADMINISTRADOR);
      if (administradores.length === 1) {
        throw new BadRequestException('No se puede eliminar el ultimo administrador');
      }
    }
    return value;
  }
}
