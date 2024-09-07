import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Rol } from 'src/usuario/entities/rol.enum';

@Injectable()
export class ParticipanteGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log("GUARD DE PARTICIPANTE");
    const http = context.switchToHttp();
    const request = http.getRequest<Request>();
    const usuario = request["usuarioRegistrado"];
    if (usuario.rol == Rol.PARTICIPANTE) {
      console.log("El usuario es participante");
      return true;
    }
    console.log("El usuario NO es participante");
    return false;
  }
}
