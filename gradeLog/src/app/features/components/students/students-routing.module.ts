import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';
import { GradesTableComponent } from '../grades-table/grades-table.component';
import { AuthAdminGuard } from 'src/app/shared/guards/auth-admin.guard';
import { StudentOverviewComponent } from '../student-overview/student-overview.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent
  },
  {
    path: 'student/:id',
    component: StudentOverviewComponent
  },
  {
    path: 'gradelog',
    component: GradesTableComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
