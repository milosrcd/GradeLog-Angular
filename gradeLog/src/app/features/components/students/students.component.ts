import { Component, OnDestroy, OnInit } from '@angular/core';
import { StudentDetails } from '../../models/student-details.model';
import { StudentsService } from '../services/students.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit, OnDestroy {
  students: StudentDetails[] = [];

  private unsubscribe$: Subject<void> = new Subject<void>;

  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents() {
    this.studentService.getAllStudents()
      .pipe(takeUntil(this.unsubscribe$)
      )
      .subscribe(data => {
        this.students = data;
      })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
