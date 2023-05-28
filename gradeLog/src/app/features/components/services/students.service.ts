import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentDetails } from '../../models/student-details.model';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpClient: HttpClient) { }

  getAllStudents(): Observable<StudentDetails[]> {
    return this.httpClient.get<StudentDetails[]>(`${environment.baseApiUrl}students`).pipe(
      catchError((error: any) => {
        console.log('Error:', error);
        return throwError(
          () => new Error('Ooops! Something went wrong.')
        )
      })
    )
  }

  getStudentById(id: number): Observable<StudentDetails> {
    return this.httpClient.get<StudentDetails>(`${environment.baseApiUrl}students/${id}`,
      {
        headers: new HttpHeaders({
          PageName: 'StudentOverview',
        }),
      });
  }
}
