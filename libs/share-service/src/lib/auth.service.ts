import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { CURRENT_USER, PERMISSIONS, ROLES_USER, TOKEN_USER } from '@dkaccess/share-utils';
import { catchError } from 'rxjs/operators';
import { handleError } from '@dkaccess/share-utils';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  login(email: string, securePassword: string, apiUrl: string) {
    return this.httpClient.post(`${apiUrl}`, {
      email: email,
      securePassword: securePassword,
    });
  }

  logout(apiUrl: string) {
    return this.httpClient
      .post(`${apiUrl}`, {})
      .pipe(catchError(handleError));
  }

  sendPasswordResetEmail(email: string) {
    return this.httpClient
      .post(`https://dfi-api-dev.danhkhoi.io/v1/account/forgot-password`, { email })
      .pipe(catchError(handleError));
  }

  confirmPasswordReset(body: any) {
    return this.httpClient
      .post(`https://dfi-api-dev.danhkhoi.io/v1/account/reset-password`, { ...body })
      .pipe(catchError(handleError));
  }

  getProperty(property: string) {
    return JSON.parse(localStorage.getItem(CURRENT_USER) || '{}')[property];
  }

  getUserId() {
    return JSON.parse(localStorage.getItem(CURRENT_USER) || '{}').id;
  }

  getToken() {
    return localStorage.getItem(TOKEN_USER);
  }

  getEmail() {
    return JSON.parse(localStorage.getItem(CURRENT_USER) || '{}').email;
  }

  getRole() {
    return JSON.parse(localStorage.getItem(ROLES_USER) || '{}');
  }

  getPermissions() {
    return JSON.parse(localStorage.getItem(PERMISSIONS) || '{}');
  }

  getPhotoUrl() {
    return JSON.parse(localStorage.getItem(CURRENT_USER) || '{}').photoUrl;
  }

  getUserProfile() {
    return JSON.parse(localStorage.getItem(CURRENT_USER) || '{}');
  }

  getCenters() {
    return JSON.parse(localStorage.getItem(CURRENT_USER) || '{}').centers;
  }

  getAuthorization() {
    try {
      const token = this.getToken();
      if (token === null) {
        this.handleTokenFail();
        return null;
      }
      const tokenDetail = token ? this.parseJwt(token) : null;
      const now = new Date().getTime();
      if (tokenDetail) {
        if (now - tokenDetail.exp * 1000 > 0) {
          this.removeStorage();
        }
      } else {
        this.handleTokenFail();
        return null;
      }
      return `${token}`;
    } catch (error) {
      console.error('Get Authorization got errors', error);
      this.handleTokenFail();
      return null;
    }
  }

  parseJwt(token: string) {
    const jwtHelp = new JwtHelperService();
    if (token) {
      return jwtHelp.decodeToken(token) || {};
    }
    return null;
  }

  handleTokenFail() {
    this.removeStorage();
  }

  removeStorage() {
    localStorage.removeItem(CURRENT_USER);
    localStorage.removeItem(TOKEN_USER);
    localStorage.removeItem(ROLES_USER);
    localStorage.removeItem(PERMISSIONS);
  }

  getPemissions(id: any, apiUrl: string) {
    return this.httpClient
      .get(`${apiUrl}`.replace(':id', id))
      .pipe(catchError(handleError));
  }
}
