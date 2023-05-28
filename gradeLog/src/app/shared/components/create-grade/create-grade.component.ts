import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GradeDetails } from 'src/app/features/models/grade-details.model';

@Component({
  selector: 'app-create-grade',
  templateUrl: './create-grade.component.html',
  styleUrls: ['./create-grade.component.scss']
})
export class CreateGradeComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: GradeDetails,
    private dialogReference: MatDialogRef<CreateGradeComponent>
  ) {
    console.log('dialog', data);
  }

  close() {
    this.dialogReference.close('Dialog closed');
  }

}
