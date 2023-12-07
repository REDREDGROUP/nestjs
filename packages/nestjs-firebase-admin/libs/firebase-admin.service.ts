import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import * as admin from 'firebase-admin';
import {
  FirebaseAuthenticationService,
  FirebaseDatabaseService,
  FirebaseFirestoreService,
  FirebaseMessagingService,
  FirebaseRemoteConfigService,
  FirebaseStorageService,
} from './services';
import { FIREBASE_ADMIN_SERVICE_OPTIONS } from './firebase-admin.constants';
import type { FirebaseAdminServiceOptions } from './interfaces';

@Injectable()
export class FirebaseAdminService implements OnModuleInit {
  private app: admin.app.App;

  public Authentication: FirebaseAuthenticationService;
  public Database: FirebaseDatabaseService;
  public Firestore: FirebaseFirestoreService;
  public Messaging: FirebaseMessagingService;
  public RemoteConfig: FirebaseRemoteConfigService;
  public Storage: FirebaseStorageService;

  constructor(@Inject(FIREBASE_ADMIN_SERVICE_OPTIONS) private readonly options: FirebaseAdminServiceOptions) {
    if (!admin.apps.length) {
      this.app = admin.initializeApp(this.options.firebaseAdminOptions);
    } else {
      this.app = admin.app();
    }

    this.Authentication = new FirebaseAuthenticationService(this.app);
    this.Database = new FirebaseDatabaseService(this.app);
    this.Firestore = new FirebaseFirestoreService(this.app);
    this.Messaging = new FirebaseMessagingService(this.app);
    this.RemoteConfig = new FirebaseRemoteConfigService(this.app);
    this.Storage = new FirebaseStorageService(this.app);
  }

  async onModuleInit() {
    if (!this.app) {
      throw new TypeError('firebase admin is not registered.');
    }
  }
}
