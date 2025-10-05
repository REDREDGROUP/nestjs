# Nestjs Mixpanel [![Actions Status][gh-actions-badge]][gh-actions] [![Node Version][node-badge]][npm] [![NPM version][npm-badge]][npm]

[gh-actions]: https://github.com/REDREDGROUP/nestjs/actions
[npm]: https://www.npmjs.com/package/@redredgroup%2Fnestjs
[gh-actions-badge]: https://github.com/REDREDGROUP/nestjs/workflows/CI/badge.svg
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

## Many Data Import

Alternatively, you can process a lot of data at once with Array values. For example:

```typescript
import { Injectable } from '@nestjs/common';
import { MixpanelService, TrackParams } from '@redredgroup/nestjs-mixpanel';

@Injectable()
export class AppService {
  constructor(private readonly mixpanelService: MixpanelService) {}

  eventTrackMany(): string {
    const USERS: TrackParams[] = [
      {
        eventName: 'CREATE_USER',
        distinctId: 'USER_1',
        properties: {
          is_happy: true,
        },
      },
      {
        eventName: 'CREATE_USER',
        distinctId: 'USER_2',
        properties: {
          is_happy: false,
        },
      },
    ];

    await this.mixpanelService.event.trackMany(USERS);

    return 'ok';
  }
}
```

In common, all methods can inject data from an Array of values by appending Many after the role.

## Copyright

© 2025 REDREDGROUP Software. All Right Reserved.

## License

Apache-2.0
