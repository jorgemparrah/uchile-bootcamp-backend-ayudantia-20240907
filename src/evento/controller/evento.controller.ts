import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { OrganizadorGuard } from 'src/commons/guard/organizador.guard';
import { ParticipanteGuard } from 'src/commons/guard/participante.guard';
import { EventoService } from '../service/evento.service';
import { CreateEventoDto } from '../dto/create-evento.dto';
import { UpdateEventoDto } from '../dto/update-evento.dto';

@Controller('evento')
export class EventoController {
  constructor(private readonly eventoService: EventoService) {}

  @UseGuards(OrganizadorGuard)
  @Post()
  create(@Body() createEventoDto: CreateEventoDto) {
    return this.eventoService.create(createEventoDto);
  }

  @Get()
  findAll() {
    return this.eventoService.findAll();
  }

  @UseGuards(ParticipanteGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventoService.findOne(+id);
  }

  @UseGuards(ParticipanteGuard)
  @Patch('registrarse/:id')
  registrarse(@Param('id') id: string) {
    return this.eventoService.findOne(+id);
  }

  @UseGuards(OrganizadorGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventoDto: UpdateEventoDto) {
    return this.eventoService.update(+id, updateEventoDto);
  }

  @UseGuards(OrganizadorGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventoService.remove(+id);
  }
}
