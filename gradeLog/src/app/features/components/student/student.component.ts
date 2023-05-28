import { Component, Input, OnInit } from '@angular/core';
import { StudentDetails } from '../../models/student-details.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  @Input() student!: StudentDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
