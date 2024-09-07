import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Rol } from 'src/usuario/entities/rol.enum';

@Injectable()
export class OrganizadorGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log("GUARD DE ORGANIZADOR");
    const http = context.switchToHttp();
    const request = http.getRequest<Request>();
    const usuario = request["usuarioRegistrado"];
    if (usuario.rol == Rol.ORGANIZADOR) {
      console.log("El usuario es organizador");
      return true;
    }
    console.log("El usuario NO es organizador");
    return false;
  }
}
