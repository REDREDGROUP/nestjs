import { Controller, Get } from '@nestjs/common';
import type { ChatCompletion } from 'openai/resources/chat';
import type { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  generateRandomNickname(): Promise<ChatCompletion> {
    return this.appService.generateRandomNickname('kay');
  }
}
