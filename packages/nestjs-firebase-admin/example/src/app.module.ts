import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirebaseAdminModule } from '@redredgroup/nestjs-firebase-admin';

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
