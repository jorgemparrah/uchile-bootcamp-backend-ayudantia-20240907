import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { console } from 'inspector';
import { Rol } from 'src/usuario/entities/rol.enum';

@Injectable()
export class AdministradorGuard implements CanActivate {

  canActivate(context: ExecutionContext): boolean {
    console.log("GUARD DE ADMINISTRADOR");
    const http = context.switchToHttp();
    const request = http.getRequest<Request>();
    const usuario = request["usuarioRegistrado"];
    if (usuario.rol == Rol.ADMINISTRADOR) {
      console.log("El usuario es administrador");
      return true;
    }
    console.log("El usuario NO es administrador");
    return false;
  }
}
