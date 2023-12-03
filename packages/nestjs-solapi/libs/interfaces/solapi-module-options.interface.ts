import { ModuleMetadata, Type } from '@nestjs/common';

export interface SolapiModuleOptions {
  isGlobal?: boolean;
  debug?: boolean;
  solapiOptions?: SolapiOptions;
}

export interface SolapiServiceOptions {
  solapiOptions: SolapiOptions;
}

export interface SolapiOptions {
  apiKey: string;
  apiSecret: string;
}

export interface SolapiOptionsFactory {
  createSolapiOptions(): Promise<SolapiServiceOptions> | SolapiServiceOptions;
}

export interface SolapiModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  isGlobal?: boolean;
  useExisting?: Type<SolapiOptionsFactory>;
  useClass?: Type<SolapiOptionsFactory>;
  useFactory?: (...args: any[]) => Promise<SolapiServiceOptions> | SolapiServiceOptions;
  inject?: any[];
}
