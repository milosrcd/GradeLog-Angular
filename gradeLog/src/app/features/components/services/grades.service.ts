import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GradeDetails } from '../../models/grade-details.model';

@Injectable({
  providedIn: 'root'
})
export class GradesService {

  constructor(private httpClient: HttpClient) { }

  getAllGrades(): Observable<GradeDetails[]> {
    return this.httpClient.get<GradeDetails[]>(`${environment.baseApiUrl}grades`).pipe(
      catchError((error: any) => {
        console.log('Error:', error);
        return throwError(
          () => new Error('Ooops! Something went wrong.')
        )
      })
    )
  }

  getStudentById(id: number): Observable<GradeDetails> {
    return this.httpClient.get<GradeDetails>(`${environment.baseApiUrl}grades/${id}`);
  }

  createGrade(grade: GradeDetails){
    return this.httpClient.post(`${environment.baseApiUrl}grades`, grade);
  }
}
