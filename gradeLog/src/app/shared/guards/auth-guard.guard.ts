import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private router: Router) { }


  canActivate(): boolean {
    return this.isAuthenticated();
  }

  private isAuthenticated(): boolean {
    const logged_user = localStorage.getItem('logged_user');

    if (!logged_user) {
      this.router.navigateByUrl('/login');
      return false;
    } else {
      return true;
    }
  }

}
