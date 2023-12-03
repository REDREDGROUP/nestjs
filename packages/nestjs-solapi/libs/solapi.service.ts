import type { SolapiServiceOptions } from './interfaces';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { SolapiMessageService } from 'solapi';
import { SOLAPI_SERVICE_OPTIONS } from './solapi.constants';

@Injectable()
export class SolapiService extends SolapiMessageService implements OnModuleInit {
  private solapiKey: string | null;
  private solapiSecret: string | null;

  constructor(@Inject(SOLAPI_SERVICE_OPTIONS) private readonly options: SolapiServiceOptions) {
    super(options.solapiOptions.apiKey, options.solapiOptions.apiSecret);

    this.solapiKey = this.options.solapiOptions.apiKey;
    this.solapiSecret = this.options.solapiOptions.apiSecret;
  }

  async onModuleInit() {
    if (!this.solapiKey) {
      throw new TypeError('solapi token is not registered.');
    }

    if (!this.solapiSecret) {
      throw new TypeError('solapi secret token is not registered.');
    }
  }
}
