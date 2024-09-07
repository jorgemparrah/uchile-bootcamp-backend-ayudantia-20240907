import { Injectable } from '@nestjs/common';
import { Evento } from '../entities/evento.entity';
import { CreateEventoDto } from '../dto/create-evento.dto';
import { UpdateEventoDto } from '../dto/update-evento.dto';

@Injectable()
export class EventoService {

  eventos : Evento[];

  constructor() {
    this.eventos = []
  }

  create(createEventoDto: CreateEventoDto) {
    return 'This action adds a new evento';
  }

  findAll() {
    return `This action returns all evento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} evento`;
  }

  update(id: number, updateEventoDto: UpdateEventoDto) {
    return `This action updates a #${id} evento`;
  }

  remove(id: number) {
    return `This action removes a #${id} evento`;
  }
}
