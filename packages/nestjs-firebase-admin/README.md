# Nestjs Firebase Admin [![Actions Status][gh-actions-badge]][gh-actions] [![Node Version][node-badge]][npm] [![NPM version][npm-badge]][npm] [![NPM version][npm-download]][npm]

[gh-actions]: https://github.com/REDREDGROUP/nestjs/actions
[npm]: https://www.npmjs.com/package/@redredgroup%2Fnestjs
[gh-actions-badge]: https://github.com/REDREDGROUP/nestjs/workflows/CI/badge.svg
[node-badge]: https://img.shields.io/node/v/@redredgroup%2Fnestjs-firebase-admin.svg
[npm-badge]: https://img.shields.io/npm/v/@redredgroup%2Fnestjs-firebase-admin.svg
[npm-download]: https://img.shields.io/npm/dm/@redredgroup%2Fnestjs-firebase-admin.svg

### Important
Versions **1.0.2** and earlier are deprecated! for older versions, use the (README.md)[deprecated] It is recommended that you use the latest version of package whenever possible.

[deprecated]: https://www.npmjs.com/package/@redredgroup/nestjs-firebase-admin/v/1.0.2

## Support Function

| Function       | Support |
| -------------- | ------- |
| Authentication | ✅      |
| Database       | ✅      |
| Firestore      | ✅      |
| Messaging      | ✅      |
| RemoteConfig   | ✅      |
| Storage        | ✅      |

### Introduction

This package is a module that converts the asynchronous firebase-admin to Nestjs.

## Installation

using npm

```bash
npm install @redredgroup/nestjs-firebase-admin
```

using yarn

```bash
yarn install @redredgroup/nestjs-firebase-admin
```

using pnpm

```bash
pnpm add @redredgroup/nestjs-firebase-admin
```

### Import module

```typescript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirebaseAdminModule } from '@redredgroup/nestjs-firebase-admin';

@Module({
  imports: [
    FirebaseAdminModule.forRoot({
      firebaseAdminOptions: {}, //firebase admin option
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
import { FirebaseAdminModule } from '@redredgroup/nestjs-firebase-admin';

@Module({
  imports: [
    FirebaseAdminModule.forRootAsync({
      useFactory: () => ({ firebaseAdminOptions: {} }), //firebase admin option
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
import { FirebaseAdminService } from '@redredgroup/nestjs-firebase-admin';

@Injectable()
export class AppService {
  constructor(private readonly firebaseAdminService: FirebaseAdminService) {}

  async getFirebaseUsers(): Promise<string> {
    const getFirebaseUsers = await this.firebaseAdminService.Authentication.listUsers();

    console.log(getFirebaseUsers);

    return 'ok';
  }
}
```

## Copyright

© 2023 REDREDGROUP Software. All Right Reserved.

## License

Apache-2.0
