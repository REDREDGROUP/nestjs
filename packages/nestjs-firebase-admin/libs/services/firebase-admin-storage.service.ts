import { Bucket } from '@google-cloud/storage';
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseStorageService {
  constructor(public readonly app: admin.app.App) {}

  get storage() {
    return this.app.storage();
  }

  bucket(name?: string): Bucket {
    return this.storage.bucket(name);
  }
}
