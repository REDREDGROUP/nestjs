import { DetailGroupMessageResponse, SendRequestConfig, SolapiMessageService } from 'solapi';
import { SmsOptions, SmsVerifyOptions } from './sms-verify.type';
import * as randomstring from 'randomstring';
import Handlebars from 'handlebars';

export class SmsVerify {
  private solapiMessageService: SolapiMessageService | null;

  constructor(apiKey: string, apiSecret: string) {
    this.solapiMessageService = new SolapiMessageService(apiKey, apiSecret);
  }

  public async send({
    config,
    smsOptions,
    requestConfigParameter,
  }: {
    config: SmsVerifyOptions;
    smsOptions: SmsOptions;
    requestConfigParameter?: SendRequestConfig;
  }): Promise<DetailGroupMessageResponse> {
    const generateVerificationCode = this.generateVerificationCode(config);

    const template = Handlebars.compile(config.verificationMessage);

    const verificationCodeInjectMessage = template({ VERIFICATION_CODE: generateVerificationCode });

    const smsResult = await this.solapiMessageService.send(
      {
        to: smsOptions.to,
        from: smsOptions.from,
        type: smsOptions.type,
        country: smsOptions.country,
        text: verificationCodeInjectMessage,
      },
      requestConfigParameter,
    );

    return smsResult;
  }

  private generateVerificationCode(config: SmsVerifyOptions): string {
    const { verificationCodeLength, verificationCodeType } = config;

    switch (verificationCodeType) {
      case 'ALPHABET_ONLY':
        return randomstring.generate({
          length: verificationCodeLength,
          charset: 'alphabetic',
        });
      case 'NUMBER_ONLY':
        return randomstring.generate({
          length: verificationCodeLength,
          charset: 'numeric',
        });
      case 'MIX':
        return randomstring.generate({
          length: verificationCodeLength,
          charset: 'alphanumeric',
        });
      default:
        throw new TypeError('There is no verification code type or you entered it incorrectly, please check the verificationCodeType.');
    }
  }
}
