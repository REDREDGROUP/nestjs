import { type DynamicModule, Module, type Provider } from '@nestjs/common';

import type {
  OpenAIModuleAsyncOptions,
  OpenAIModuleOptions,
  OpenAIOptionsFactory,
} from './interfaces';
import { OPENAI_SERVICE_OPTIONS } from './openai.constants';
import { OpenAIService } from './openai.service';

@Module({
  providers: [OpenAIService],
  exports: [OpenAIService],
})
export class OpenAIModule {
  static forRoot(options: OpenAIModuleOptions = {}): DynamicModule {
    return {
      global: options.isGlobal,
      module: OpenAIModule,
      providers: [
        {
          provide: OPENAI_SERVICE_OPTIONS,
          useValue: options,
        },
      ],
    };
  }

  static forRootAsync(options: OpenAIModuleAsyncOptions): DynamicModule {
    return {
      global: options.isGlobal,
      module: OpenAIModule,
      imports: options.imports || [],
      providers: OpenAIModule.createAsyncProviders(options),
    };
  }

  private static createAsyncProviders(
    options: OpenAIModuleAsyncOptions,
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return OpenAIModule.createAsyncOptionsProvider(options);
    }

    if (!options.useClass) {
      return OpenAIModule.createAsyncOptionsProvider(options);
    }

    return [
      ...OpenAIModule.createAsyncOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ];
  }

  private static createAsyncOptionsProvider(
    options: OpenAIModuleAsyncOptions,
  ): Provider[] {
    if (options.useFactory) {
      return [
        {
          provide: OPENAI_SERVICE_OPTIONS,
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
        provide: OPENAI_SERVICE_OPTIONS,
        useFactory: async (optionsFactory: OpenAIOptionsFactory) =>
          await optionsFactory.createOpenAIOptions(),
        inject: [injectToken],
      },
    ];
  }
}
