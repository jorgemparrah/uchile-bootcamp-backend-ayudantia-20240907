import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Response } from 'express';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class UsuarioRegistradoGuard implements CanActivate {

  constructor(private readonly usuarioService: UsuarioService) {}

  canActivate(context: ExecutionContext): boolean {
    console.log("GUARD DE USUARIO REGISTRADO");
    const http = context.switchToHttp();
    const request = http.getRequest<Request>();
    const idUsuario : string = request.headers["x-user-id"];
    const encontrado = this.usuarioService.findOne(+idUsuario);
    if (encontrado) {
      console.log("El usuario esta registrado");
      return true;
    }
    console.log("El usuario NO esta registrado");
    // const response : Response = http.getResponse<Response>();
    // response.status(401).send("Usuario no registrado");
    throw new UnauthorizedException("Usuario no registrado");
  }
}
