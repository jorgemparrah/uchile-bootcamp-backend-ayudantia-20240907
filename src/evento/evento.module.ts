import { Module } from '@nestjs/common';
import { EventoController } from './controller/evento.controller';
import { EventoService } from './service/evento.service';

@Module({
  controllers: [EventoController],
  providers: [EventoService],
})
export class EventoModule {}
