import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 color:any=["Red","Black","Blue"];
 size:any=["Small","Medium","Large","X-Large","XX-Large"];
 categories=["Cap","Hoodies","Watch","Bags"]

 myProductForm:FormGroup|any

  constructor(
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
  }

  buildForm(){
    this.myProductForm = this.formBuilder.group({

    })
  }

  submitProductForm(){
    
  }

}
