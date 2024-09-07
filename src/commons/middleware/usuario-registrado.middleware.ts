import { Injectable, NestMiddleware } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/service/usuario.service';

@Injectable()
export class UsuarioRegistradoMiddleware implements NestMiddleware {

  // constructor(private readonly usuarioService: UsuarioService) {}

  use(req: any, res: any, next: () => void) {
    // console.log("MIDDLEWARE DE USUARIO REGISTRADO");
    // const headerUsuario = req.headers["x-user-id"];
    // console.log(headerUsuario)
    
    /*
    EL MIDDLEWARE NO TIENE ACCESO A LA INYECCION DE DEPENDENCIAS
    POR LO QUE NO PODEMOS INYECTAR EL SERVICIO DE USUARIO
    PARA BUSCAR EL USUARIO POR EL ID QUE VIENE EN EL HEADER
    */
    next();
  }
}
