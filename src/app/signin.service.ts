import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  userId: String;


  constructor(private http: HttpClient) { }

  setUser(username) {
    // change var to const
    const formdata = new FormData();
    const options = {responseType: 'text' as 'text'};
    formdata.append('username', username);
    return this.http.post('https://userservice438.herokuapp.com/login/' , formdata, options);
  }

}
