import { DynamicModule, Module, Provider } from '@nestjs/common';
import { MIXPANEL_SERVICE_OPTIONS } from './mixpanel.constants';
import { MixpanelService } from './mixpanel.service';
import { MixpanelModuleAsyncOptions, MixpanelModuleOptions, MixpanelOptionsFactory } from './interfaces';

@Module({
  providers: [MixpanelService],
  exports: [MixpanelService],
})
export class MixpanelModule {
  static forRoot(options: MixpanelModuleOptions = {}): DynamicModule {
    return {
      global: options.isGlobal,
      module: MixpanelModule,
      providers: [
        {
          provide: MIXPANEL_SERVICE_OPTIONS,
          useValue: options,
        },
      ],
    };
  }

  static forRootAsync(options: MixpanelModuleAsyncOptions): DynamicModule {
    return {
      global: options.isGlobal,
      module: MixpanelModule,
      imports: options.imports || [],
      providers: this.createAsyncProviders(options),
    };
  }

  private static createAsyncProviders(options: MixpanelModuleAsyncOptions): Provider[] {
    if (options.useExisting || options.useFactory) {
      return this.createAsyncOptionsProvider(options);
    }

    return [
      ...this.createAsyncOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ];
  }

  private static createAsyncOptionsProvider(options: MixpanelModuleAsyncOptions): Provider[] {
    if (options.useFactory) {
      return [
        {
          provide: MIXPANEL_SERVICE_OPTIONS,
          useFactory: options.useFactory,
          inject: options.inject || [],
        },
      ];
    }
    return [
      {
        provide: MIXPANEL_SERVICE_OPTIONS,
        useFactory: async (optionsFactory: MixpanelOptionsFactory) => await optionsFactory.createMixpanelOptions(),
        inject: [options.useExisting || options.useClass],
      },
    ];
  }
}
