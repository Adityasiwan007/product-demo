import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient, HttpParams, HttpErrorResponse} from '@angular/common/http'
import {Observable} from 'rxjs'
import {LoginModel} from '../../models/login/loginModel';
import { catchError } from 'rxjs/operators';
import  {environment} from '../../../environments/environment'
import { ApiService } from '../api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private apiService: ApiService) { }

  //  getLogin(path:String,LoginBody:Object):Observable<any> {
  //   const header = new HttpHeaders({ 'content-type': 'application/json' });
  //    return this.apiService.post(path, LoginModel).pipe(
  //     map(response => response.responseData as LoginModel)
  //   );
  //   }
   

    getLogin(path:String,LoginBody:Object):Observable<LoginModel[]> {
      const header = new HttpHeaders({ 'content-type': 'application/json' });
       return this.http.post<LoginModel[]>(environment.baseUrl+path,LoginBody,{headers:header});
      }


}
