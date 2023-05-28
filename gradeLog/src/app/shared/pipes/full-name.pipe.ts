import { Pipe, PipeTransform } from '@angular/core';
import { StudentDetails } from 'src/app/features/models/student-details.model';

@Pipe({
  name: 'fullName',
  pure: false
})
export class FullNamePipe implements PipeTransform {

  transform(student: StudentDetails ): string {
    return `${student.fName} ${student.lName}`
  }

}
