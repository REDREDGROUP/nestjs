import { type DynamicModule, Module, type Provider } from '@nestjs/common';

import { GOOGLE_AUTH_SERVICE_OPTIONS } from './authentication.const';
import { GoogleAuthenticationService } from './authentication.service';
import type {
  GoogleAuthModuleAsyncOptions,
  GoogleAuthModuleOptions,
  GoogleAuthOptionsFactory,
} from './interfaces';

@Module({
  providers: [GoogleAuthenticationService],
  exports: [GoogleAuthenticationService],
})
export class GoogleAuthModule {
  static forRoot(options: GoogleAuthModuleOptions): DynamicModule {
    return {
      global: options.isGlobal,
      module: GoogleAuthModule,
      providers: [
        {
          provide: GOOGLE_AUTH_SERVICE_OPTIONS,
          useValue: options,
        },
      ],
    };
  }

  static forRootAsync(options: GoogleAuthModuleAsyncOptions): DynamicModule {
    return {
      global: options.isGlobal,
      module: GoogleAuthModule,
      imports: options.imports || [],
      providers: GoogleAuthModule.createAsyncProviders(options),
    };
  }

  private static createAsyncProviders(
    options: GoogleAuthModuleAsyncOptions,
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return GoogleAuthModule.createAsyncOptionsProvider(options);
    }

    if (!options.useClass) {
      return GoogleAuthModule.createAsyncOptionsProvider(options);
    }

    return [
      ...GoogleAuthModule.createAsyncOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ];
  }

  private static createAsyncOptionsProvider(
    options: GoogleAuthModuleAsyncOptions,
  ): Provider[] {
    if (options.useFactory) {
      return [
        {
          provide: GOOGLE_AUTH_SERVICE_OPTIONS,
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
        provide: GOOGLE_AUTH_SERVICE_OPTIONS,
        useFactory: async (optionsFactory: GoogleAuthOptionsFactory) =>
          await optionsFactory.createGoogleAuthOptions(),
        inject: [injectToken],
      },
    ];
  }
}
