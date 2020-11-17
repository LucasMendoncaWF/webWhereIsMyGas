import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api_url } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(
    private http: HttpClient
  ) { }

  getInfoFromApi(url, id?) {
    const token = localStorage.getItem('@token');
    if (token) {
      return this.http.get(api_url + url + (id ? '/' + id : ''), {
        headers: {
          Authorization: token
        }
      });
    } else {
      this.getInfoFromApi(url, id);
    }
  }

  postInfoToApi(url, formData) {
    const token = localStorage.getItem('@token');
    return this.http.post(api_url + url, formData, {
      headers: {
        Authorization: token
      }
    });
  }

  deleteInfo(url, id) {
    const token = localStorage.getItem('@token');
    return this.http.delete(api_url + url + '/' + id, {
      headers: {
        Authorization: token
      }
    });
  }
}
