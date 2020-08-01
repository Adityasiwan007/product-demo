import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { UtilityService } from './utility.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private utilityService: UtilityService) { }


  formatErrors(error: HttpErrorResponse, suppressErr?: boolean) {
    let errorMessage = '';
    if (error.error.message) {
      // Get client-side error
      errorMessage = `Error Code: ${error.error.status}\nMessage: ${error.error.message}`;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // this.Logger.error(errorMessage);
    //TO Suppress the message confimation
    if (!suppressErr) {
      //this.MsgDialog.error(this.errorBuilder(error));
      // this.Toast.apperror(this.errorBuilder(error));
      
    }
    return throwError(errorMessage);
  }


  post(path: String, body: Object): Observable<any> {
    const header = new HttpHeaders({ 'content-type': 'application/json' });
    return this.http.post(
      environment.baseUrl+path,
      body,
      { headers: header }
    );
  }
}
