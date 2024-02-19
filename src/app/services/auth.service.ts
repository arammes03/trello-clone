import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs';

const BASE_URL = 'https://fake-trello-api.herokuapp.com';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // CONSTRUCTOR
  constructor(private http: HttpClient) {}

  // METODO LOGIN
  login(email: string, password: string) {
    return this.http.post(`${BASE_URL}/api/v1/auth/login`, {
      email,
      password,
    });
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
}
