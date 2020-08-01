import { Component, OnInit } from '@angular/core';
import {LoginModel} from '../../models/login/loginModel';
import {LoginService} from '../../services/loginForm/login.service'
import {Router} from '@angular/router';
import {SendModel} from '../../models/login/sendModel';
import  {environment} from '../../../environments/environment'
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:LoginModel;
xyz:String;
postData:SendModel;
  constructor(private loginService:LoginService, private router:Router,private cookieService:CookieService) { }


 path="/api/auth/login";

 ngOnInit(): void {
   
 this.postData={
    id_type: 'contact_number',
    id: '+918590763926',
    password: 'Hackme@38'
 }
  this.loginService.getLogin(this.path,this.postData).subscribe((loginJson:any) => {
  this.login=loginJson;
  this.xyz=this.login.data.token;

  environment.token=`${this.xyz}`;
  this.cookieService.set('token', `${this.xyz}`);   //setting token cookie

  console.log("Token: ",this.xyz);
});
}

  loginfunction()
  {
    this.router.navigate(['home']);
  }
  onSubmit() {
    this.router.navigate(['home']);
  }
}