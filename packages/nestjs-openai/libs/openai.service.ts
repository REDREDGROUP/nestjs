import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { OpenAI } from 'openai';
import { OPENAI_SERVICE_OPTIONS } from './openai.constants';
import type { OpenAIServiceOptions } from './interfaces';

@Injectable()
export class OpenAIService extends OpenAI implements OnModuleInit {
  constructor(@Inject(OPENAI_SERVICE_OPTIONS) config: OpenAIServiceOptions) {
    super(config.options);
  }

  async onModuleInit() {
    if (!this.apiKey) {
      throw new TypeError('openai token is not registered.');
    }
  }
}
