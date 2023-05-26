import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageCenterComponent } from './components/page-center/page-center.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    PageCenterComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    PageCenterComponent,
    FooterComponent
  ]
})
export class CoreModule { }
