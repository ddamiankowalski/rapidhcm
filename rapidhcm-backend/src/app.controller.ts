import { Post, Res } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

const path = require('path');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // root(@Res() response): void {
  //   //response.sendFile(path.resolve('../rapidhcm-frontend/dist/rapidhcm-frontend/index.html'));
  // }

  @Get('cats')
  apsi(): string {
    console.log('nie wiem')
    return 'This action returns all cats';
  }
}
