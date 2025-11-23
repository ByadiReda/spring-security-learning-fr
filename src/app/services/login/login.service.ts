import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "src/app/model/user.model";
import { AppConstants } from 'src/app/constants/app.constants';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }

  validateLoginDetails(user: User) {
    window.sessionStorage.setItem("userdetails",JSON.stringify(user));
    return this.http.get(environment.rooturl + AppConstants.USER_API_URL, { observe: 'response',withCredentials: true });
  }

  login(username: string, password: string) {
   return  this.http.post(environment.rooturl+AppConstants.LOGIN_API_URL,{
      username,
      password
    }, { observe: 'response' })

  }

}
