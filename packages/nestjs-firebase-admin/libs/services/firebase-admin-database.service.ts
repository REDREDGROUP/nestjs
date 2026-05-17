import type { FirebaseApp } from '@firebase/app-types';
import { Injectable } from '@nestjs/common';
import type * as admin from 'firebase-admin';

@Injectable()
export class FirebaseDatabaseService implements admin.database.Database {
  app: FirebaseApp;

  constructor(public readonly _app: admin.app.App) {
    this.app = _app as unknown as FirebaseApp;
  }

  get database(): admin.database.Database {
    return this._app.database();
  }

  goOffline(): void {
    return this.database.goOffline();
  }
  goOnline(): void {
    return this.database.goOnline();
  }
  ref(path?: string | admin.database.Reference): admin.database.Reference {
    return this.database.ref(path);
  }
  refFromURL(url: string): admin.database.Reference {
    return this.database.refFromURL(url);
  }
  getRules(): Promise<string> {
    return this.database.getRules();
  }
  getRulesJSON(): Promise<object> {
    return this.database.getRulesJSON();
  }
  setRules(source: string | object | Buffer): Promise<void> {
    return this.database.setRules(source);
  }
  useEmulator(host: string, port: number): void {
    this.database.useEmulator(host, port);
  }
}
