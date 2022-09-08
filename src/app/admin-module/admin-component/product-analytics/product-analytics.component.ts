import { Component, OnInit } from '@angular/core';
import { JsonDataService } from 'src/app/shared-portal/JsonService/json-data.service';

@Component({
  selector: 'app-product-analytics',
  templateUrl: './product-analytics.component.html',
  styleUrls: ['./product-analytics.component.css']
})
export class ProductAnalyticsComponent implements OnInit {
dataComefromJson:any=[];
  constructor(
    private jsonDataService:JsonDataService
  ) { }

  ngOnInit(): void {
    this.dataComefromJson = this.jsonDataService.getjsonData()
  }

}
