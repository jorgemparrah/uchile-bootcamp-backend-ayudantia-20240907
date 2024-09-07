import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { CabeceraMiddleware } from './cabecera/cabecera.middleware';
import { UsuarioRegistradoMiddleware } from './usuario-registrado/usuario-registrado.middleware';
import { EventoModule } from './evento/evento.module';

@Module({
  imports: [UsuarioModule, EventoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CabeceraMiddleware, UsuarioRegistradoMiddleware)
      .forRoutes('*');
  }
}

