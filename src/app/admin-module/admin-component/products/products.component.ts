import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 color=["Red","Black","Blue"];
 categories=["Cap","Hoodies","Watch","Bags"];
 selectSize=["S","M","L","X-L","XX-L"];
 newSizeArray:any=[]
 
 

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
  getSize(event:any){
    if(event.target.checked){
     this.newSizeArray.push(event.target.value)
    }
    else{
     this.newSizeArray = this.newSizeArray.filter((value:any)=>value != event.target.value)
    }
  }
  


 submitProductForm(){
  // console.log(this.ProductForm.get('companyName').setValue('Rameen is the new hacker of the class')); Gettter and Sstter (it get and set the value any Object(productForm))
  this.newSizeArray.forEach((elements:string)=>{
   let formControl = new FormControl(elements)
   this.myProductForm.get("size").push(formControl)
  })
 let result= this.myProductForm.value;
  console.log(result);
  


  
  }

}
