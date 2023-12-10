import { ModuleMetadata, Type } from '@nestjs/common';
import { ClientOptions } from 'openai';

export interface OpenAIModuleOptions {
  isGlobal?: boolean;
  debug?: boolean;
  options?: OpenAIOptions;
}

export interface OpenAIServiceOptions {
  options: OpenAIOptions;
}

export interface OpenAIOptions extends ClientOptions {}

export interface OpenAIOptionsFactory {
  createOpenAIOptions(): Promise<OpenAIServiceOptions> | OpenAIServiceOptions;
}

export interface OpenAIModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  isGlobal?: boolean;
  useExisting?: Type<OpenAIOptionsFactory>;
  useClass?: Type<OpenAIOptionsFactory>;
  useFactory?: (...args: any[]) => Promise<OpenAIServiceOptions> | OpenAIServiceOptions;
  inject?: any[];
}
