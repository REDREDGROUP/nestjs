import { DetailGroupMessageResponse, SendRequestConfig, SolapiMessageService } from 'solapi';
import { SmsOptions, SmsVerifyOptions } from './sms-verify.type';
import * as randomstring from 'randomstring';
import Handlebars from 'handlebars';
import { smsVerifySuccessResponseDummy } from './sms-verify.dummy';
import { CONSOLE_PRINT_VERIFICATION_TEXT_BODY, PRODUCTION_USE_WARNING } from './sms-verify.constants';

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
  }): Promise<{ verificationCode: string; smsResult: DetailGroupMessageResponse }> {
    const generateVerificationCode = this.generateVerificationCode(config);

    const template = Handlebars.compile(config.verificationMessage);

    const verificationCodeInjectMessage = template({ VERIFICATION_CODE: generateVerificationCode });

    if (config.consoleVerificationMode) {
      return this.localVerificationMode({ text: verificationCodeInjectMessage, verificationCode: generateVerificationCode });
    }

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

    return { verificationCode: generateVerificationCode, smsResult };
  }

  private generateVerificationCode(config: SmsVerifyOptions): string {
    const { verificationCodeLength, verificationCodeType } = config;

    switch (verificationCodeType) {
      case 'ALPHABET_ONLY':
        return randomstring.generate({
          length: verificationCodeLength,
          capitalization: 'uppercase',
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
          capitalization: 'uppercase',
          charset: 'alphanumeric',
        });
      default:
        throw new TypeError('There is no verification code type or you entered it incorrectly, please check the verificationCodeType.');
    }
  }

  private localVerificationMode({ text, verificationCode }: { text: string; verificationCode: string }) {
    console.warn(PRODUCTION_USE_WARNING);
    console.log(CONSOLE_PRINT_VERIFICATION_TEXT_BODY(text));

    return { verificationCode, smsResult: smsVerifySuccessResponseDummy };
  }
}
