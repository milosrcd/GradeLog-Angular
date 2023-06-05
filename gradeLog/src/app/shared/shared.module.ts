import { CommonModule } from '@angular/common';
import { DescriptionLimitPipe } from './pipes/description-limit.pipe';
import { FullNamePipe } from './pipes/full-name.pipe';
import { HeadlineComponent } from './components/headline/headline.component';
import { CreateGradeComponent } from './components/create-grade/create-grade.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    DescriptionLimitPipe,
    FullNamePipe,
    HeadlineComponent,
    CreateGradeComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DescriptionLimitPipe,
    FullNamePipe,
    HeadlineComponent,
    SearchPipe
  ]
})
export class SharedModule { }
