import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm } from '../interfaces/login-form.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(user: LoginForm){
    return this.httpClient.get(`${environment.baseApiUrl}users?email=${user.email}&password=${user.password}`);
  }

  isAdmin() {
    const logged_user = localStorage.getItem('logged_user');
    const loggedUser = JSON.parse(logged_user!);
    return loggedUser.role === 'admin';
  }
}
