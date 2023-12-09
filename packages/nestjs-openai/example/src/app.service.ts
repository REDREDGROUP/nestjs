import { Injectable } from '@nestjs/common';
import { OpenAIService } from '@redredgroup/nestjs-openai';
import { ChatCompletion } from 'openai/resources';

@Injectable()
export class AppService {
  constructor(private readonly openAiService: OpenAIService) {}

  async generateRandomNickname(nickname: string): Promise<ChatCompletion> {
    const chatCompletion = await this.openAiService.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant that generates nicknames.',
        },
        {
          role: 'user',
          content: `Generate 4 nicknames similar to "${nickname}"`,
        },
      ],
      model: 'gpt-3.5-turbo',
    });

    return chatCompletion;
  }
}
