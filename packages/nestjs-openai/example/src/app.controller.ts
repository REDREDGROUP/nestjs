import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ChatCompletion } from 'openai/resources/chat';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  generateRandomNickname(): Promise<ChatCompletion> {
    return this.appService.generateRandomNickname('kay');
  }
}
