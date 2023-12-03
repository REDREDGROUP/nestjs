# Nestjs Solapi [![Actions Status][gh-actions-badge]][gh-actions] [![Node Version][node-badge]][npm] [![NPM version][npm-badge]][npm]

[gh-actions]: https://github.com/REDREDGROUP/nestjs/actions
[npm]: https://www.npmjs.com/package/@redredgroup%2Fnestjs
[gh-actions-badge]: https://github.com/REDREDGROUP/nestjs/workflows/CI/badge.svg
[node-badge]: https://img.shields.io/node/v/@redredgroup%2Fnestjs-solapi.svg
[npm-badge]: https://img.shields.io/npm/v/@redredgroup%2Fnestjs-solapi.svg

### Introduction

This package is a module that converts the asynchronous Solapi to Nestjs.

## Installation

using npm

```bash
npm install @redredgroup/nestjs-solapi
```

using yarn

```bash
yarn install @redredgroup/nestjs-solapi
```

using pnpm

```bash
pnpm add @redredgroup/nestjs-solapi
```

### Import module

```typescript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SolapiModule } from '@redredgroup/nestjs-solapi';

@Module({
  imports: [
    SolapiModule.forRoot({
      solapiOptions: {
        apiKey: 'YOUR_API_KEY',
        apiSecret: 'YOUR_API_TOKEN',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//Or the forRootAsync module using @nestjs/Config

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SolapiModule } from '@redredgroup/nestjs-solapi';

@Module({
  imports: [
    SolapiModule.forRootAsync({
      useFactory: () => ({
        solapiOptions: {
          apiKey: 'YOUR_API_KEY',
          apiSecret: 'YOUR_API_TOKEN',
        },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

## Example

### Sending SMS

```typescript
import { Injectable } from '@nestjs/common';
import { SolapiService } from '@redredgroup/nestjs-solapi';

@Injectable()
export class AppService {
  constructor(private readonly solapiService: SolapiService) {}

  async sendingSms(): Promise<string> {
    const sendResult = await this.solapiService.send({
      to: 'target Number',
      from: 'Enter the registered calling number from your account',
      text: 'SMS can be up to 45 Korean characters and 90 alphanumeric characters.',
    });

    console.log(sendResult);

    return 'ok';
  }
}
```

## Copyright

© 2023 REDREDGROUP Software. All Right Reserved.

## License

Apache-2.0
