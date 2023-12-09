import { DynamicModule, Module, Provider } from "@nestjs/common";

import {
  OpenAIModuleAsyncOptions,
  OpenAIModuleOptions,
  OpenAIOptionsFactory,
} from "./interfaces";
import { OPENAI_SERVICE_OPTIONS } from "./openai.constants";
import { OpenAIService } from "./openai.service";

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
      providers: this.createAsyncProviders(options),
    };
  }

  private static createAsyncProviders(
    options: OpenAIModuleAsyncOptions,
  ): Provider[] {
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
    return [
      {
        provide: OPENAI_SERVICE_OPTIONS,
        useFactory: async (optionsFactory: OpenAIOptionsFactory) =>
          await optionsFactory.createOpenAIOptions(),
        inject: [options.useExisting || options.useClass],
      },
    ];
  }
}
