import { Component } from '@angular/core';
import { loginInfo } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
login :loginInfo={
  username:"",
    password:""
};

loginCred(){
  console.log(this.login);
}
}
