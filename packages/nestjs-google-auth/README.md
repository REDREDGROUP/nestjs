# Nestjs Google Auth [![Actions Status][gh-actions-badge]][gh-actions] [![Node Version][node-badge]][npm] [![NPM version][npm-badge]][npm]

[gh-actions]: https://github.com/REDREDGROUP/nestjs/actions
[npm]: https://www.npmjs.com/package/@redredgroup%2Fnestjs-google-auth
[gh-actions-badge]: https://github.com/REDREDGROUP/nestjs/workflows/CI/badge.svg
[node-badge]: https://img.shields.io/node/v/@redredgroup%2Fnestjs-google-auth.svg
[npm-badge]: https://img.shields.io/npm/v/@redredgroup%2Fnestjs-google-auth.svg

### Introduction

This package is a module that integrates Google Authentication to NestJS application.

## Installation

using npm

```bash
npm install @redredgroup/nestjs-google-auth
```

using yarn

```bash
yarn add @redredgroup/nestjs-google-auth
```

using pnpm

```bash
pnpm add @redredgroup/nestjs-google-auth
```

### Import module

```typescript
import { Module } from '@nestjs/common';
import { GoogleAuthModule } from '@redredgroup/nestjs-google-auth';

@Module({
  imports: [
    GoogleAuthModule.forRoot({
      clientId: 'YOUR_GOOGLE_CLIENT_ID',
      clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
      redirectUri: 'YOUR_REDIRECT_URI',
    }),
  ],
})
export class AppModule {}

//Or the forRootAsync module using @nestjs/Config

import { Module } from '@nestjs/common';
import { GoogleAuthModule } from '@redredgroup/nestjs-google-auth';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    GoogleAuthModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        clientId: configService.get('GOOGLE_CLIENT_ID'),
        clientSecret: configService.get('GOOGLE_CLIENT_SECRET'),
        redirectUri: configService.get('GOOGLE_REDIRECT_URI'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
```

## Example

### OAuth2 Client

```typescript
import { Injectable } from '@nestjs/common';
import { GoogleAuthService } from '@redredgroup/nestjs-google-auth';

@Injectable()
export class AppService {
  constructor(private readonly googleAuthService: GoogleAuthService) {}

  async getAuthUrl(): string {
    const authUrl = this.googleAuthService.generateAuthUrl({
      scope: ['https://www.googleapis.com/auth/userinfo.email'],
    });

    return authUrl;
  }

  async getUserInfo(code: string) {
    const { tokens } = await this.googleAuthService.getToken(code);
    const userInfo = await this.googleAuthService.getUserInfo(tokens.access_token);

    return userInfo;
  }
}
```

## Copyright

© 2025 REDREDGROUP Software. All Right Reserved.

## License

Apache-2.0
