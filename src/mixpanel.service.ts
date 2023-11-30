import type { MixpanelServiceOptions } from './interfaces';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Mixpanel, init } from 'mixpanel';
import { MIXPANEL_SERVICE_OPTIONS } from './mixpanel.constants';
import { MixpanelAliasMethods, MixpanelEventMethods, MixpanelGroupMethods, MixpanelPeopleMethods } from './method';

@Injectable()
export class MixpanelService implements OnModuleInit {
  private mixpanel: Mixpanel | null = null;

  public alias: MixpanelAliasMethods;
  public event: MixpanelEventMethods;
  public people: MixpanelPeopleMethods;
  public groups: MixpanelGroupMethods;

  constructor(@Inject(MIXPANEL_SERVICE_OPTIONS) private readonly options: MixpanelServiceOptions) {
    const token = this.options.mixpanelOptions.projectToken;
    const config = this.options.mixpanelOptions.config;

    if (token) {
      this.mixpanel = init(token, config);

      this.alias = new MixpanelAliasMethods(this.mixpanel);
      this.event = new MixpanelEventMethods(this.mixpanel);
      this.people = new MixpanelPeopleMethods(this.mixpanel);
      this.groups = new MixpanelGroupMethods(this.mixpanel);
    }
  }

  async onModuleInit() {
    if (!this.mixpanel) {
      throw new TypeError('mixpanel token is not registered.');
    }
  }
}
