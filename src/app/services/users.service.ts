import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { User } from '../models/user.model';

const BASE_URL = 'https://fake-trello-api.herokuapp.com';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  getUsers() {
    const token = this.tokenService.getToken();
    return this.http.get<User[]>(`${BASE_URL}/api/v1/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
