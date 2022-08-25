import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
 userRegisterForm:any|FormGroup
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  Form(){
    this.userRegisterForm = this.formBuilder.group({
      fName:[[''],Validators.required,],
      lName:[[''],Validators.required],
      Email:[[''],Validators.required,Validators.email],
      Password:[[''],Validators.required],
      CPassword:[[''],Validators.required],
    })
  }
  registerUserForm(){
    
  }

}
