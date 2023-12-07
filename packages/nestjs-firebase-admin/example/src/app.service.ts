import { Injectable } from '@nestjs/common';
import { FirebaseAdminService } from '@redredgroup/nestjs-firebase-admin';

@Injectable()
export class AppService {
  constructor(private readonly firebaseAdminService: FirebaseAdminService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async getFirebaseUsers(): Promise<string> {
    const getFirebaseUsers =
      await this.firebaseAdminService.Authentication.listUsers();

    console.log(getFirebaseUsers);

    return 'ok';
  }
}
