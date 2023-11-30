# Nestjs Mixpanel [![Actions Status][gh-actions-badge]][gh-actions] [![Node Version][node-badge]][npm] [![NPM version][npm-badge]][npm]

[gh-actions]: https://github.com/REDREDGROUP/nestjs-mixpanel/actions
[npm]: https://www.npmjs.com/package/@redredgroup%2Fnestjs-mixpanel
[gh-actions-badge]: https://github.com/REDREDGROUP/nestjs-mixpanel/workflows/CI/badge.svg
[node-badge]: https://img.shields.io/node/v/@redredgroup%2Fnestjs-mixpanel.svg
[npm-badge]: https://img.shields.io/npm/v/@redredgroup%2Fnestjs-mixpanel.svg

### Introduction

This package is a module that converts the asynchronous Mixpanel to Nestjs.

## Installation

using npm

```bash
npm install @redredgroup/nestjs-mixpanel
```

using yarn

```bash
yarn install @redredgroup/nestjs-mixpanel
```

using pnpm

```bash
pnpm add @redredgroup/nestjs-mixpanel
```

### Import module

```typescript
import { Module } from '@nestjs/common';
import { MixpanelModule } from '@redredgroup/nestjs-mixpanel';

@Module({
  imports: [
    MixpanelModule.forRoot({
      mixpanelOptions: {
        projectToken: 'YOUR_MIXPANEL_PROJECT_TOKEN',
      },
    }),
  ],
})
export class AppModule {}

//Or the forRootAsync module using @nestjs/Config

import { Module } from '@nestjs/common';
import { MixpanelModule } from '@redredgroup/nestjs-mixpanel';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MixpanelModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        mixpanelOptions: {
          projectToken: configService.get('YOUR_MIXPANEL_PROJECT_TOKEN'),
        },
      }),
      inject: [ConfigModule],
    }),
  ],
})
export class AppModule {}
```

## Example

### Track Event

```typescript
import { Injectable } from '@nestjs/common';
import { MixpanelService } from '@redredgroup/nestjs-mixpanel';

@Injectable()
export class AppService {
  constructor(private readonly mixpanelService: MixpanelService) {}
  eventTrack(): string {
    const USER_ID = 'USER1';

    this.mixpanelService.event.track({
      eventName: 'CREATE_USER',
      distinctId: USER_ID,
      properties: {
        is_happy: true,
      },
    });

    return 'ok';
  }
}
```

### People Increment

```typescript
import { Injectable } from '@nestjs/common';
import { MixpanelService } from '@redredgroup/nestjs-mixpanel';

@Injectable()
export class AppService {
  constructor(private readonly mixpanelService: MixpanelService) {}
  peopleIncrementAdd(): string {
    const USER_ID = 'USER1';

    this.mixpanelService.people.set({
      distinctId: USER_ID,
      properties: {
        happy_count: 1,
      },
    });

    return 'ok';
  }
}
```

## Copyright

© 2023 REDREDGROUP Software. All Right Reserved.

## License

Apache
