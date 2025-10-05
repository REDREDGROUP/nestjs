import { ModuleMetadata, Type } from '@nestjs/common';

export interface GoogleAuthModuleOptions {
  isGlobal?: boolean;
  clientId: string;
  clientSecret: string;
}

export interface GoogleAuthOptionsFactory {
  createGoogleAuthOptions(): Promise<GoogleAuthModuleOptions> | GoogleAuthModuleOptions;
}

export interface GoogleAuthModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  isGlobal?: boolean;
  useExisting?: Type<GoogleAuthOptionsFactory>;
  useClass?: Type<GoogleAuthOptionsFactory>;
  useFactory?: (...args: any[]) => Promise<GoogleAuthModuleOptions> | GoogleAuthModuleOptions;
  inject?: any[];
}
