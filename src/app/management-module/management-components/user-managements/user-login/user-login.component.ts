import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userLoginForm:any|FormGroup
  constructor(
    private formBuilder:FormBuilder
  ) { 
    this.userLoginFormModel();
  }

  ngOnInit(): void {
  }
userLoginFormModel(){
  this.userLoginForm = this.formBuilder.group({
   Name: new FormControl(['',Validators.required,Validators.pattern(/^[A-Za-z]+$/)]),
   Password: new FormControl(['',Validators.required]),
  })
}

  submitUserLoginForm(){
    this.userLoginForm.value
    console.log(this.userLoginForm.value);
    
  }
}
