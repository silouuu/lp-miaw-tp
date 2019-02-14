import { Injectable } from '@angular/core';

import { LocalStorageService } from '@rars/ngx-webstorage';

@Injectable()
export class TokenStorageService {

  constructor(
    private lss: LocalStorageService) {
  }

  /**
   * Set the Authentication token in the service and in the localStorage
   * */
  public setAuthToken(token: string): void {
    this.lss.store('auth_token', token);
  }

  /**
   * Get the Authentication token from the service or from the localStorage if not found
   * */
  public getAuthToken(): string {
    return this.lss.retrieve('auth_token');
  }

  /**
   * Check if token is set in the service or in the localStorage
   * */
  public hasToken(): boolean {
    return this.lss.retrieve('auth_token') && this.lss.retrieve('auth_token').length;
  }

  /**
   * Remove the Authentication token from the service and from the localStorage
   * */
  public deleteToken(): void {
    this.lss.clear('auth_token');
  }

  /**
   * Check if token is set in the localStorage
   * */
  public isAuthenticate(): boolean {
    return !!this.lss.retrieve('auth_token');
  }

  /**
   * Disconnect user by delete token and account type
   */
  public disconnect() {
    this.deleteToken();
  }
}
