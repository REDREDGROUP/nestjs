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

  async sendingCustomVerifySms() {
    const sendVerifySmsResult =
      await this.solapiService.CustomSolapi.SmsVerify.send({
        config: {
          verificationCodeLength: 10,
          verificationCodeType: 'ALPHABET_ONLY',
          verificationMessage: 'Verification Code is: {{VERIFICATION_CODE}}',
        },
        smsOptions: {
          to: 'target Number',
          from: 'Enter the registered calling number from your account',
          type: 'SMS',
        },
      });

    console.log(sendVerifySmsResult.verificationCode);
    console.log(sendVerifySmsResult.smsResult);

    return 'ok';
  }
}
