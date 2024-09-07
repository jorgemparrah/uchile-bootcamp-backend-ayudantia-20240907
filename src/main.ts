import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UsuarioRegistradoGuard } from './usuario-registrado/usuario-registrado.guard';
import { UsuarioService } from './usuario/usuario.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const usuarioService : UsuarioService = app.get(UsuarioService);
  const guard = new UsuarioRegistradoGuard(usuarioService);
  app.useGlobalGuards(guard);
  await app.listen(3000);
}
bootstrap();
