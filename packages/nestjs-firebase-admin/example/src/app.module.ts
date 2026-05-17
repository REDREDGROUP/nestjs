import { Module } from '@nestjs/common';
import { FirebaseAdminModule } from '@redredgroup/nestjs-firebase-admin';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    FirebaseAdminModule.forRootAsync({
      useFactory: () => ({ firebaseAdminOptions: {} }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
