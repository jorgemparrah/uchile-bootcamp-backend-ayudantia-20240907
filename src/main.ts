import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UsuarioRegistradoGuard } from './usuario-registrado/usuario-registrado.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(new UsuarioRegistradoGuard());
  await app.listen(3000);
}
bootstrap();
