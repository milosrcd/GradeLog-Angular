import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageCenterComponent } from './components/page-center/page-center.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './auth/components/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    PageCenterComponent,
    FooterComponent,
    NotFoundComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    FormsModule,
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    PageCenterComponent,
    FooterComponent
  ]
})
export class CoreModule { }
