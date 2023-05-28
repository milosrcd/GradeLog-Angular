import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionLimitPipe } from './pipes/description-limit.pipe';
import { FullNamePipe } from './pipes/full-name.pipe';
import { HeadlineComponent } from './components/headline/headline.component';
import { CreateGradeComponent } from './components/create-grade/create-grade.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    DescriptionLimitPipe,
    FullNamePipe,
    HeadlineComponent,
    CreateGradeComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  exports: [
    DescriptionLimitPipe,
    FullNamePipe,
    HeadlineComponent
  ]
})
export class SharedModule { }
