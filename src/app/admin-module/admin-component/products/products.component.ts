import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 color:any=["Red","Black","Blue"];
 size:any=["Small","Medium","Large","X-Large","XX-Large"];
 categories=["Cap","Hoodies","Watch","Bags"]
  constructor() { }

  ngOnInit(): void {
  }

}
