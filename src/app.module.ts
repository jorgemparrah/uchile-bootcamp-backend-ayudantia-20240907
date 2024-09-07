import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CabeceraMiddleware } from './commons/middleware/cabecera.middleware';
import { EventoModule } from './evento/evento.module';
import { UsuarioRegistradoMiddleware } from './commons/middleware/usuario-registrado.middleware';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [UsuarioModule, EventoModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CabeceraMiddleware, UsuarioRegistradoMiddleware)
      .forRoutes('*');
  }
}

