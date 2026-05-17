import { Module } from '@nestjs/common';
import { MixpanelModule } from '@redredgroup/nestjs-mixpanel';
import { AppController } from './app.controller';
import { AppService } from './app.service';

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
