import { Pipe, PipeTransform } from '@angular/core';
import { StudentDetails } from 'src/app/features/models/student-details.model';

@Pipe({
  name: 'searchPipe',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(students: StudentDetails[], searchTerm: string): StudentDetails[] {
    if (!students || !searchTerm) {
      return students; // Return the original list if no students or search term is provided
    }

    // Perform the filtering based on the search term
    searchTerm = searchTerm.toLowerCase();
    return students.filter(student => {
      // Adjust the property names as per your student object structure
      const studentName = student.fName + student.lName;
      return studentName.includes(searchTerm);
    });
  }

}
