import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class UsuarioRegistradoGuard implements CanActivate {

  // constructor(private readonly usuarioService: UsuarioService) {}

  canActivate(context: ExecutionContext): boolean {
    console.log("GUARD DE USUARIO REGISTRADO");
    const http = context.switchToHttp();

    const request = http.getRequest<Request>();
    const response = http.getResponse<Response>();
    console.log(response);
    const idUsuario = request.headers["x-user-id"];
    console.log("ID de usuario:", idUsuario);
    return true;
  }
}
