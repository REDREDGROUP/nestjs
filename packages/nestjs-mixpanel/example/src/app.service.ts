import { Injectable } from '@nestjs/common';
import { MixpanelService, TrackParams } from '@redredgroup/nestjs-mixpanel';

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

    this.mixpanelService.event.trackMany(USERS);

    return 'ok';
  }

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
