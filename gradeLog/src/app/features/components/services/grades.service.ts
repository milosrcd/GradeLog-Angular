import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { GradeDetails } from '../../models/grade-details.model';
import { environment } from 'src/environments/environment';

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

  createGrade(grade: GradeDetails){
    return this.httpClient.post(`${environment.baseApiUrl}grades`, grade);
  }
}
