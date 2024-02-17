import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // CONSTRUCTOR
  constructor(private http: HttpClient) {}

  apiUrl: string = 'https://fake-trello-api.herokuapp.com';

  // METODO LOGIN
  login(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/api/v1/auth/login`, {
      email,
      password,
    });
  }
}
