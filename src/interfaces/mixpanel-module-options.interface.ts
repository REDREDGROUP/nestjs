import { ModuleMetadata, Type } from '@nestjs/common';
import { InitConfig } from 'mixpanel';

export interface MixpanelModuleOptions {
  isGlobal?: boolean;

  mixpanelOptions?: MixpanelServiceOptions;
}

export interface MixpanelServiceOptions {
  mixpanelOptions: MixpanelOptions;
}

export interface MixpanelOptions {
  mixpanelToken: string;
  config?: Partial<InitConfig>;
}

export interface MixpanelOptionsFactory {
  createMixpanelOptions(): Promise<MixpanelServiceOptions> | MixpanelServiceOptions;
}

export interface MixpanelModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  isGlobal?: boolean;
  useExisting?: Type<MixpanelOptionsFactory>;
  useClass?: Type<MixpanelOptionsFactory>;
  useFactory?: (...args: any[]) => Promise<MixpanelServiceOptions> | MixpanelServiceOptions;
  inject?: any[];
}
