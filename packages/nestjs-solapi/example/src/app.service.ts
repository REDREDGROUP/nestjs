import { Injectable } from '@nestjs/common';
import { SolapiService } from '@redredgroup/nestjs-solapi';

@Injectable()
export class AppService {
  constructor(private readonly solapiService: SolapiService) {}

  async sendingSms() {
    const sendResult = await this.solapiService.send({
      to: 'target Number',
      from: 'Enter the registered calling number from your account',
      text: 'SMS can be up to 45 Korean characters and 90 alphanumeric characters.',
    });

    console.log(sendResult);

    return 'ok';
  }
}
