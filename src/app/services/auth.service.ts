import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { switchMap, tap } from 'rxjs';

const BASE_URL = 'https://fake-trello-api.herokuapp.com';

import { TokenService } from './token.service';

import { ResponseLogin } from '../models/auth.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // CONSTRUCTOR
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  // METODO LOGIN
  login(email: string, password: string) {
    return this.http
      .post<ResponseLogin>(`${BASE_URL}/api/v1/auth/login`, {
        email,
        password,
      })
      .pipe(
        tap((response) => {
          this.tokenService.saveToken(response.access_token);
        })
      );
  }

  // METODO LOGOUT
  logout() {
    this.tokenService.removeToken();
  }

  // METODO REGISTER
  register(name: string, email: string, password: string) {
    return this.http.post(`${BASE_URL}/api/v1/auth/register`, {
      name,
      email,
      password,
    });
  }

  // METODO QUE REGISTRA Y LOGUEA
  registerAndLogin(name: string, email: string, password: string) {
    return this.register(name, email, password).pipe(
      switchMap(() => this.login(email, password))
    );
  }

  // METODO EMAIL DISPONIBLE
  isAvailable(email: string) {
    return this.http.post<{ isAvailable: boolean }>(
      `${BASE_URL}/api/v1/auth/is-available`,
      {
        email,
      }
    );
  }

  // METODO RECOVERY
  recovery(email: string) {
    return this.http.post(`${BASE_URL}/api/v1/auth/recovery`, { email });
  }

  // METODO CAMBIAR CONTRASEÑA
  resetPass(token: string, newPassword: string) {
    return this.http.post(`${BASE_URL}/api/v1/auth/change-password`, {
      token,
      newPassword,
    });
  }

  // METODO OBTENER PERFIL
  getProfile() {
    const token = this.tokenService.getToken();
    return this.http.get<User>(`${BASE_URL}/api/v1/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
