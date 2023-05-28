import { Component, OnDestroy, OnInit } from '@angular/core';
import { StudentDetails } from '../../models/student-details.model';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-student-overview',
  templateUrl: './student-overview.component.html',
  styleUrls: ['./student-overview.component.scss']
})
export class StudentOverviewComponent implements OnInit, OnDestroy {
  studentId: string | null = '';
  studentOverview?: StudentDetails;

  students: StudentDetails[] = [];

  private unsubscribe$: Subject<void> = new Subject<void>;

  constructor(private activatedRouter: ActivatedRoute, private studentService: StudentsService) { }

  ngOnInit(): void {
    this.getStudentId();
  }

  private getStudentById(id: string | null) {
    if (id) {
      this.studentService.getStudentById(+id).subscribe(student => {
        this.studentOverview = student;
      });
    }
  }

  private getStudentId() {
    this.activatedRouter.paramMap
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(params => {
        const id = params.get('id');
        this.getStudentById(id);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
