import { Subject, takeUntil } from 'rxjs';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GradesService } from 'src/app/features/components/services/grades.service';
import { GradeDetails } from 'src/app/features/models/grade-details.model';
import { StudentsService } from 'src/app/features/components/services/students.service';
import { StudentDetails } from 'src/app/features/models/student-details.model';

@Component({
  selector: 'app-create-grade',
  templateUrl: './create-grade.component.html',
  styleUrls: ['./create-grade.component.scss']
})
export class CreateGradeComponent implements OnInit {

  gradesList: GradeDetails[] = [];
  studentList: StudentDetails[] = [];


  private unsubscribe$: Subject<void> = new Subject<void>;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: GradeDetails,
    private dialogReference: MatDialogRef<CreateGradeComponent>,
    private gradeService: GradesService,
    private studentService: StudentsService
  ) {
    console.log('dialog', data);
  }
  ngOnInit(): void {
    this.getStudents();
  }

  close() {
    this.dialogReference.close('Dialog closed');
  }

  private getStudents(){
    this.studentService.getAllStudents()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(students => this.studentList = students);
  }

}
