import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseMessagingService {
  constructor(public readonly app: admin.app.App) {}

  get messaging() {
    return this.app.messaging();
  }

  send(message: admin.messaging.Message, dryRun?: boolean): Promise<string> {
    return this.messaging.send(message, dryRun);
  }

  sendEach(messages: admin.messaging.Message[], dryRun?: boolean): Promise<admin.messaging.BatchResponse> {
    return this.messaging.sendEach(messages, dryRun);
  }

  sendEachForMulticast(message: admin.messaging.MulticastMessage, dryRun?: boolean): Promise<admin.messaging.BatchResponse> {
    return this.messaging.sendEachForMulticast(message, dryRun);
  }
  subscribeToTopic(registrationTokens: string | string[], topic: string): Promise<admin.messaging.MessagingTopicManagementResponse> {
    return this.messaging.subscribeToTopic(registrationTokens, topic);
  }
  unsubscribeFromTopic(registrationTokens: string | string[], topic: string): Promise<admin.messaging.MessagingTopicManagementResponse> {
    return this.messaging.unsubscribeFromTopic(registrationTokens, topic);
  }
}
