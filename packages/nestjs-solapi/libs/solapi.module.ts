import { type DynamicModule, Module, type Provider } from '@nestjs/common';

import type {
  SolapiModuleAsyncOptions,
  SolapiModuleOptions,
  SolapiOptionsFactory,
} from './interfaces';
import { SOLAPI_SERVICE_OPTIONS } from './solapi.constants';
import { SolapiService } from './solapi.service';

@Module({
  providers: [SolapiService],
  exports: [SolapiService],
})
export class SolapiModule {
  static forRoot(options: SolapiModuleOptions = {}): DynamicModule {
    return {
      global: options.isGlobal,
      module: SolapiModule,
      providers: [
        {
          provide: SOLAPI_SERVICE_OPTIONS,
          useValue: options,
        },
      ],
    };
  }

  static forRootAsync(options: SolapiModuleAsyncOptions): DynamicModule {
    return {
      global: options.isGlobal,
      module: SolapiModule,
      imports: options.imports || [],
      providers: SolapiModule.createAsyncProviders(options),
    };
  }

  private static createAsyncProviders(
    options: SolapiModuleAsyncOptions,
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return SolapiModule.createAsyncOptionsProvider(options);
    }

    if (!options.useClass) {
      return SolapiModule.createAsyncOptionsProvider(options);
    }

    return [
      ...SolapiModule.createAsyncOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ];
  }

  private static createAsyncOptionsProvider(
    options: SolapiModuleAsyncOptions,
  ): Provider[] {
    if (options.useFactory) {
      return [
        {
          provide: SOLAPI_SERVICE_OPTIONS,
          useFactory: options.useFactory,
          inject: options.inject || [],
        },
      ];
    }

    const injectToken = options.useExisting ?? options.useClass;

    if (!injectToken) {
      return [];
    }

    return [
      {
        provide: SOLAPI_SERVICE_OPTIONS,
        useFactory: async (optionsFactory: SolapiOptionsFactory) =>
          await optionsFactory.createSolapiOptions(),
        inject: [injectToken],
      },
    ];
  }
}
