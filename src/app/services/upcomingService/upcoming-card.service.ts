import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient, HttpParams, HttpErrorResponse} from '@angular/common/http'
import {Observable} from 'rxjs'
import {UpcomingModel} from '../../models/upcomingEventCard/upcomingEvent';
import { catchError } from 'rxjs/operators';
import  {environment} from '../../../environments/environment'
import { ApiService } from '../api.service';
import { map } from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UpcomingService {

  constructor(private http:HttpClient,private apiService: ApiService,private cookieService:CookieService) { }

    getupcoming(path:String):Observable<UpcomingModel[]> {
      
    // environment.token=localStorage.getItem('localToken')
       environment.token=this.cookieService.get('token')
       const header = new HttpHeaders({ 'jwt-token': `${environment.token}` });
       return this.http.get<UpcomingModel[]>(environment.baseUrl+path,{headers:header});
       
      }


}
