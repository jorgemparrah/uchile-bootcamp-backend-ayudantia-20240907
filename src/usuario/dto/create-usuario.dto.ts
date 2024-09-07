import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsEmail, IsEnum, IsNotEmpty, IsString, MaxLength } from "class-validator";
import { Rol } from "../entities/rol.enum";

export class CreateUsuarioDto {

  @ApiProperty({ example: "jorge@gmail.com", description: "Correo electrónico del usuario (debe ser un correo con formato válido)" })
  @IsEmail({ }, { message: "El email debe ser un correo electrónico válido" })
  email: string;

  @ApiProperty({ example: "Jorge", maxLength: 10 })
  @IsString({ message: "El nombre debe ser un texto" })
  @MaxLength(10, { message: "El nombre debe tener una longitud máxima de 10 caracteres" })
  nombre: string;

  @ApiProperty({ example: "2000-12-31", description: "Fecha de nacimiento del usuario (FORMATO: YYYY-MM-DD)" })
  @IsDateString({ }, { message: "La fecha de nacimiento debe ser una fecha válida" })
  fechaNacimiento: string;

  @ApiProperty({ enum: Rol, example: Rol.PARTICIPANTE })
  @IsEnum(Rol, { message: "El rol debe ser uno de los roles válidos" })
  rol: string;

}
