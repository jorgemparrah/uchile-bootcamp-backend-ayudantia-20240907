import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdministradorGuard } from 'src/administrador/administrador.guard';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuarioService } from './usuario.service';
import { ApiHeader } from '@nestjs/swagger';
import { UltimoAdministradorPipe } from 'src/ultimo-administrador/ultimo-administrador.pipe';

@UseGuards(AdministradorGuard)
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @ApiHeader({ name: 'x-user-id', required: true, example: 1 })
  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @ApiHeader({ name: 'x-user-id', required: true, example: 1 })
  @Delete(':id')
  remove(@Param('id', new ParseIntPipe(), UltimoAdministradorPipe) id: string) {
    return this.usuarioService.remove(+id);
  }
}
