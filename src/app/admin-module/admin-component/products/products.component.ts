import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 color:any=["Red","Black","Blue"];
 pSize=["Small","Medium","Large","X-Large","XX-Large"];
 categories=["Cap","Hoodies","Watch","Bags"]

 myProductForm:FormGroup|any


  constructor(
    private formBuilder:FormBuilder
  ) { this.buildForm()}

  ngOnInit(): void {
  }

  buildForm(){
    this.myProductForm = this.formBuilder.group({
     productName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      quantity: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      price: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      description: ['', Validators.required],
      color: ['',[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]],
      companyName: ['',[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]],
      // logoMaterial: ['',[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]],
      category: ['', Validators.required],
      size: new FormArray([]),
      productMaterial:['',Validators.required],
      image: new FormArray([])
    })
  }

  submitProductForm(){
 let result= this.myProductForm.value
  console.log(result);
  
  }

}
