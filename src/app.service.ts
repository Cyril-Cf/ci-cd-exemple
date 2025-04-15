import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const date = new Date();

    let year = date.getFullYear();

    return 'Hello World 2!';
  }
}
