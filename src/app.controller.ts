import { Controller, Get, Header, Headers, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Headers("x-user-id") idUsuario: string): string {
    console.log("Header (x-user-id):", idUsuario)
    return this.appService.getHello();
  }

  @Post()
  getHello2(@Headers("x-user-id") idUsuario: string): string {
    console.log("Header (x-user-id):", idUsuario)
    return this.appService.getHello();
  }
}
