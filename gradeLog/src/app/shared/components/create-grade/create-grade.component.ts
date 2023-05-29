import { Subject, takeUntil } from 'rxjs';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GradesService } from 'src/app/features/components/services/grades.service';
import { GradeDetails } from 'src/app/features/models/grade-details.model';
import { StudentsService } from 'src/app/features/components/services/students.service';
import { StudentDetails } from 'src/app/features/models/student-details.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GradesForm } from '../../interfaces/grades-form.interface';

@Component({
  selector: 'app-create-grade',
  templateUrl: './create-grade.component.html',
  styleUrls: ['./create-grade.component.scss']
})
export class CreateGradeComponent implements OnInit, OnDestroy {

  gradesList: GradeDetails[] = [];
  studentList: StudentDetails[] = [];
  gradePoints: number = 0;
  passed: string = '';

  gradeForm = this.fb.group({
    student: ['', Validators.required],
    lecture: ['', Validators.required],
    points: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
    textarea: ['', Validators.maxLength(250)],
    date: ['', Validators.required]
  });

  private unsubscribe$: Subject<void> = new Subject<void>;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: GradeDetails,
    private dialogReference: MatDialogRef<CreateGradeComponent>,
    private gradeService: GradesService,
    private studentService: StudentsService,
    private router: Router,
    private fb: FormBuilder,

  ) {
    console.log('dialog', data);
  }
  ngOnInit(): void {
    this.getStudents();
  }

  close() {
    this.dialogReference.close('Dialog closed');
  }

  onSubmit() {
    const formData = this.gradeForm.value as unknown as GradesForm;

    switch (true) {
      case formData.points <= 54:
        this.gradePoints = 5;
        this.passed = 'Failed';
        break;
      case formData.points <= 64:
        this.gradePoints = 6;
        this.passed = 'Passed';
        break;
      case formData.points <= 74:
        this.gradePoints = 7;
        this.passed = 'Passed';
        break;
      case formData.points <= 84:
        this.gradePoints = 8;
        this.passed = 'Passed';
        break;
      case formData.points <= 94:
        this.gradePoints = 9;
        this.passed = 'Passed';
        break;
      default:
        this.gradePoints = 10;
        this.passed = 'Passed';
        break;
    }


    const grade: GradeDetails = {
      name: formData.student!.fName + ' ' + formData.student!.lName,
      studentID: formData.student!.id.toString(),
      lecture: formData.lecture,
      comment: formData.textarea,
      examDate: formData.date,
      points: formData.points,
      grade: this.gradePoints,
      passed: this.passed,
      id: 0
    };

    this.gradeService.createGrade(grade)
      .subscribe((data: any) => {
        this.router.navigateByUrl('gradelog');
      });
  }

  private getStudents() {
    this.studentService.getAllStudents()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(students => this.studentList = students);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
