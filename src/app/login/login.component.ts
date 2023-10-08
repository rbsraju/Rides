import { Component } from '@angular/core';
import { loginInfo } from './login';
import { LoginServiceService } from './Service/login-service.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginService:LoginServiceService) { }
login :loginInfo={
  email: "",
    password:""
};
token!: string;
WrongCreds!:string;
SuccessMsg!:string;

// error$ = new Subject<any>();

// catchError$=this.error$.asObservable();
// credentials$=this.loginService.loginStream$
checkLogin(){
   return this.loginService.getToken(this.login)
  .subscribe({

     next:data=>{ this.token=data; 
    console.log(this.token);},
     error:err=>{ this.WrongCreds="Invalid Credentials"; console.log(err);},
     complete:()=>{ this.SuccessMsg="Login Successfull"; console.log(this.SuccessMsg); }
});
  

  
}

}
