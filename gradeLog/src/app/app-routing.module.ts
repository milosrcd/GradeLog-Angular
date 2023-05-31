import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { GradesTableComponent } from './features/components/grades-table/grades-table.component';
import { StudentOverviewComponent } from './features/components/student-overview/student-overview.component';
import { StudentsComponent } from './features/components/students/students.component';
import { LoginComponent } from './core/auth/components/login/login.component';
import { AuthAdminGuard } from './shared/guards/auth-admin.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import ('./features/components/students/students.module').then((module) => module.StudentsModule),
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
