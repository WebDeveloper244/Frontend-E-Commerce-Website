import { Component, OnInit } from '@angular/core';
import { JsonDataService } from 'src/app/shared-portal/JsonService/json-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
dataComeFromJson:any=[]
  constructor(
    private jsonData:JsonDataService
  ) { 
    this.jsonData1()
  }

  ngOnInit(): void {
  }
  jsonData1(){
    this.dataComeFromJson = this.jsonData.getjsonData()
  }

}
