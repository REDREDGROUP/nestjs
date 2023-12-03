import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SolapiModule } from '@redredgroup/nestjs-solapi';

@Module({
  imports: [
    SolapiModule.forRootAsync({
      useFactory: () => ({
        solapiOptions: {
          apiKey: 'YOUR_API_KEY',
          apiSecret: 'YOUR_API_TOKEN',
        },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
