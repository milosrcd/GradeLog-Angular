import { Component, OnDestroy, OnInit } from '@angular/core';
import { GradeDetails } from '../../models/grade-details.model';
import { Subject, takeUntil } from 'rxjs';
import { GradesService } from '../services/grades.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateGradeComponent } from 'src/app/shared/components/create-grade/create-grade.component';

@Component({
  selector: 'app-grades-table',
  templateUrl: './grades-table.component.html',
  styleUrls: ['./grades-table.component.scss']
})
export class GradesTableComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['studentID', 'name', 'lecture', 'points', 'grade', 'comment', 'examDate', 'passed', 'edit'];
  columns = [
    {
      name: 'studentID',
      title: 'ID',
      property: 'studentID'
    },
    {
      name: 'name',
      title: 'Name',
      property: 'name'
    },
    {
      name: 'lecture',
      title: 'Lecture',
      property: 'lecture'
    },
    {
      name: 'points',
      title: 'Points',
      property: 'points'
    },
    {
      name: 'grade',
      title: 'Grade',
      property: 'grade'
    },
    {
      name: 'comment',
      title: 'Comment',
      property: 'comment'
    },
    {
      name: 'examDate',
      title: 'examDate',
      property: 'examDate'
    },
    {
      name: 'passed',
      title: 'Passed',
      property: 'passed'
    },
    {
      name: 'edit',
      title: 'edit',
      property: 'edit'
    },
  ]
  grades: GradeDetails[] = [];

  private unsubscribe$: Subject<void> = new Subject<void>;

  constructor(private gradesService: GradesService, private dialog: MatDialog) { }


  ngOnInit(): void {
    this.getGrades();
  }

  private getGrades() {
    this.gradesService.getAllGrades()
      .pipe(takeUntil(this.unsubscribe$)
      )
      .subscribe(data => {
        this.grades = data;
      })
  }

  createGrade(){
    this.dialog.open(CreateGradeComponent, {
      minHeight: '400px',
      width: '24%'
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
