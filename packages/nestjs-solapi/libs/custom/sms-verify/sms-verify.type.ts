export type SmsVerifyCodeType = 'NUMBER_ONLY' | 'ALPHABET_ONLY' | 'MIX';

export type SmsVerifyOptions = {
  consoleVerificationMode?: boolean;
  verificationCodeType: SmsVerifyCodeType;
  verificationCodeLength: number;
  verificationMessage: string;
};

type MessageType = 'SMS';

export type SmsOptions = {
  to: string | Array<string>;
  from?: string;
  type: MessageType;
  country?: string;
};
