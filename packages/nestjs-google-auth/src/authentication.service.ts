import { Inject, Injectable } from '@nestjs/common';
import type { TokenPayload } from 'google-auth-library';
import { type Auth, google } from 'googleapis';

import { GOOGLE_AUTH_SERVICE_OPTIONS } from './authentication.const';
import type { GoogleAuthModuleOptions } from './interfaces';

@Injectable()
export class GoogleAuthenticationService {
  public googleAuth: Auth.OAuth2Client;

  constructor(
    @Inject(GOOGLE_AUTH_SERVICE_OPTIONS)
    private readonly options: GoogleAuthModuleOptions,
  ) {
    if (!this.options) {
      throw new TypeError(
        'You must provide Google Auth options to initialize GoogleAuthModule.',
      );
    }

    const clientId = this.options.clientId;
    const clientSecret = this.options.clientSecret;
    this.googleAuth = new google.auth.OAuth2(clientId, clientSecret);
  }

  async getUserInfoWithIdToken(id_token: string): Promise<{
    success: boolean;
    provider_id?: string | null;
    payload?: TokenPayload | undefined;
  }> {
    try {
      const loginTicket = await this.googleAuth.verifyIdToken({
        idToken: id_token,
      });
      const userId: string | null = loginTicket.getUserId();
      const payload: TokenPayload | undefined = loginTicket.getPayload();
      return {
        success: true,
        provider_id: userId,
        payload,
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      throw new Error(`Failed to verify Google ID token: ${message}`);
    }
  }
}
