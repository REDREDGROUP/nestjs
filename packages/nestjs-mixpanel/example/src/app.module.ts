import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MixpanelModule } from '@redredgroup/nestjs-mixpanel';

@Module({
  imports: [
    MixpanelModule.forRootAsync({
      useFactory: () => ({
        mixpanelOptions: {
          projectToken: 'YOUR_PROJECT_TOKEN',
          config: {
            debug: true,
            logger: console,
          },
        },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
