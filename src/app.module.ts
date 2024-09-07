import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { CabeceraMiddleware } from './cabecera/cabecera.middleware';
import { UsuarioRegistradoMiddleware } from './usuario-registrado/usuario-registrado.middleware';

@Module({
  imports: [UsuarioModule],
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

