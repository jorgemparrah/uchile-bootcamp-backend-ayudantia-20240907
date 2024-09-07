import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UsuarioRegistradoGuard } from './usuario-registrado/usuario-registrado.guard';
import { UsuarioService } from './usuario/usuario.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { UsuarioModule } from './usuario/usuario.module';
import { EventoModule } from './evento/evento.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const usuarioService : UsuarioService = app.get(UsuarioService);
  const guard = new UsuarioRegistradoGuard(usuarioService);
  app.useGlobalGuards(guard);

  const config = new DocumentBuilder()
    .setTitle('API example')
    .setDescription('Descripcion de la API')
    .setVersion('1.0')
    .addTag('Ejemplos')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    include: [ UsuarioModule, EventoModule ], // OPCIONAL - PARA APLICAR A SOLO ALGUNOS MODULOS
  });
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
