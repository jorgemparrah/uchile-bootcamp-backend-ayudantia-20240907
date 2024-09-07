import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CabeceraMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    // console.log(req);
    // console.log(req.headers);
    // console.log(req.body);
    // console.log(req.query);
    // console.log(req.url);
    // console.log(req.baseUrl);
    // console.log(req.originalUrl);
    // console.log(req.params);
    console.log("MIDDLEWARE DE CABECERA");
    const headerUsuario = req.headers["x-user-id"];
    if (!headerUsuario) {
      console.log("El request no tiene el header x-user-id");
      res.status(428).send("No autorizado (Falta el header x-user-id)");
    } else {
      console.log("El request tiene el header x-user-id");
      next();
    }
  }
}
