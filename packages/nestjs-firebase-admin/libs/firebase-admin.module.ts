import { DynamicModule, Module, Provider } from '@nestjs/common';

import { FirebaseAdminModuleAsyncOptions, FirebaseAdminModuleOptions, FirebaseAdminOptionsFactory } from './interfaces';
import { FIREBASE_ADMIN_SERVICE_OPTIONS } from './firebase-admin.constants';
import { FirebaseAdminService } from './firebase-admin.service';

@Module({
  providers: [FirebaseAdminService],
  exports: [FirebaseAdminService],
})
export class FirebaseAdminModule {
  static forRoot(options: FirebaseAdminModuleOptions = {}): DynamicModule {
    return {
      global: options.isGlobal,
      module: FirebaseAdminModule,
      providers: [
        {
          provide: FIREBASE_ADMIN_SERVICE_OPTIONS,
          useValue: options,
        },
      ],
    };
  }

  static forRootAsync(options: FirebaseAdminModuleAsyncOptions): DynamicModule {
    return {
      global: options.isGlobal,
      module: FirebaseAdminModule,
      imports: options.imports || [],
      providers: this.createAsyncProviders(options),
    };
  }

  private static createAsyncProviders(options: FirebaseAdminModuleAsyncOptions): Provider[] {
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

  private static createAsyncOptionsProvider(options: FirebaseAdminModuleAsyncOptions): Provider[] {
    if (options.useFactory) {
      return [
        {
          provide: FIREBASE_ADMIN_SERVICE_OPTIONS,
          useFactory: options.useFactory,
          inject: options.inject || [],
        },
      ];
    }
    return [
      {
        provide: FIREBASE_ADMIN_SERVICE_OPTIONS,
        useFactory: async (optionsFactory: FirebaseAdminOptionsFactory) => await optionsFactory.createFirebaseAdminOptions(),
        inject: [options.useExisting || options.useClass],
      },
    ];
  }
}
