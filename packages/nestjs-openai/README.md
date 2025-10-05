# Nestjs OpenAI [![Actions Status][gh-actions-badge]][gh-actions] [![Node Version][node-badge]][npm] [![NPM version][npm-badge]][npm]

[gh-actions]: https://github.com/REDREDGROUP/nestjs/actions
[npm]: https://www.npmjs.com/package/@redredgroup%2Fnestjs
[gh-actions-badge]: https://github.com/REDREDGROUP/nestjs/workflows/CI/badge.svg
[node-badge]: https://img.shields.io/node/v/@redredgroup%2Fnestjs-openai.svg
[npm-badge]: https://img.shields.io/npm/v/@redredgroup%2Fnestjs-openai.svg

### Introduction

This package is a module that converts the asynchronous OpenAI to Nestjs.

## Installation

using npm

```bash
npm install @redredgroup/nestjs-openai
```

using yarn

```bash
yarn install @redredgroup/nestjs-openai
```

using pnpm

```bash
pnpm add @redredgroup/nestjs-openai
```

### Import module

```typescript
import { Module } from '@nestjs/common';
import { OpenAIModule } from '@redredgroup/nestjs-openai';

@Module({
  imports: [
    OpenAIModule.forRoot({
      options: {
        apiKey: 'OPENAI_API_KEY',
        //other openai Options
      },
    }),
  ],
})
export class AppModule {}

//Or the forRootAsync module using @nestjs/Config

import { Module } from '@nestjs/common';
import { OpenAIModule } from '@redredgroup/nestjs-openai';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    OpenAIModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        options: {
          apiKey: configService.get('OPENAI_API_KEY'),
          //other openai Options
        },
      }),
    }),
  ],
})
export class AppModule {}
```

## Output 4 nicknames similar to the injected nickname

###

```typescript
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
```

## Copyright

© 2025 REDREDGROUP Software. All Right Reserved.

## License

Apache-2.0
