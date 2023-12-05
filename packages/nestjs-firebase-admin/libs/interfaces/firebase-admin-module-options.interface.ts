import { ModuleMetadata, Type } from '@nestjs/common';
import * as admin from 'firebase-admin';

export interface FirebaseAdminModuleOptions {
  isGlobal?: boolean;
  debug?: boolean;
  firebaseAdminOptions?: FirebaseAdminOptions;
}

export interface FirebaseAdminServiceOptions {
  firebaseAdminOptions: FirebaseAdminOptions;
}

export interface FirebaseAdminOptions extends admin.AppOptions {}

export interface FirebaseAdminOptionsFactory {
  createFirebaseAdminOptions(): Promise<FirebaseAdminServiceOptions> | FirebaseAdminServiceOptions;
}

export interface FirebaseAdminModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  isGlobal?: boolean;
  useExisting?: Type<FirebaseAdminOptionsFactory>;
  useClass?: Type<FirebaseAdminOptionsFactory>;
  useFactory?: (...args: any[]) => Promise<FirebaseAdminServiceOptions> | FirebaseAdminServiceOptions;
  inject?: any[];
}
