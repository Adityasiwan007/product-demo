import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient, HttpParams, HttpErrorResponse} from '@angular/common/http'
import {Observable} from 'rxjs'
import {LiveModel} from '../../models/liveEventCard/liveEvent';
import { catchError } from 'rxjs/operators';
import  {environment} from '../../../environments/environment'
import { ApiService } from '../api.service';
import { map } from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient,private apiService: ApiService,private cookieService:CookieService) { }

    getlive(path:String):Observable<LiveModel[]> {
      
    // environment.token=localStorage.getItem('localToken')
       environment.token=this.cookieService.get('token')
       const header = new HttpHeaders({ 'jwt-token': `${environment.token}` });
       return this.http.get<LiveModel[]>(environment.baseUrl+path,{headers:header});
       
      }


}
