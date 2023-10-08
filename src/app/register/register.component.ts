import { Component } from '@angular/core';
import { userDetails } from './user';
import { Subject } from 'rxjs';
import { ServiceService } from './Service/service.service';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private service:ServiceService){

  }
  usersList  :userDetails={
    Name : "",
    email: "",
    phoneNumber: "",
    gender: "",
    category: "Customer",
    streetAddressLine1: "",
    streetAddressLine2: "",
    city: "",
    postalCode: "",
    password: "",
    conformPassword: ""
    
  }; 
 error$ = new Subject<any>();

 catchError$=this.error$.asObservable();

 postUserDetails(regForm: NgForm){
   return this.service.postDetails(this.usersList)
   .subscribe(data=>{
    console.log(data);
    regForm.reset();
   },
   ); 
 }
 

 
}
