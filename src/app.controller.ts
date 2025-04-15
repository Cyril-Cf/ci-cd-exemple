import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id') // Cette route correspond à /users/:id
  findUser(@Param('id') id: string): string {
    return `Utilisateur avec l'ID: ${id}`;
  }
  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
