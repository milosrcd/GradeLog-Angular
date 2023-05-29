import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth/services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanLoad {

  constructor(private route: Router, private authService: AuthService){}

  canLoad(): boolean {
    return this.authService.isAdmin();
  }
}
