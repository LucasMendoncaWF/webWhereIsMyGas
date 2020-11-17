import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api_url } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  async getAuth() {
    if (!localStorage.getItem('@token')) {
      const response = await this.postInfo().toPromise();
      localStorage.setItem('@token', `${response['tipo']} ${response['token']}`);
    }
  }

  postInfo() {
    return this.http.post(
      api_url + 'auth',
      {
        email: 'teste@gmail.com',
        senha: '123456',
      }
    );
  }
}
