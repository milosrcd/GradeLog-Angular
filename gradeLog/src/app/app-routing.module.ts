import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCenterComponent } from './core/components/page-center/page-center.component';
import { StudentsComponent } from './features/components/students/students.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { StudentOverviewComponent } from './features/components/student-overview/student-overview.component';
import { GradesTableComponent } from './features/components/grades-table/grades-table.component';

const routes: Routes = [
  {
    path: 'home',
    component: StudentsComponent
  },
  {
    path: 'student/:id',
    component: StudentOverviewComponent
  },
  {
    path: 'gradelog',
    component: GradesTableComponent
  },
  {
    path: 'creategrade',
    component: StudentsComponent
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
