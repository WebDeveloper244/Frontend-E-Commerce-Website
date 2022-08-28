import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { DashboardComponent } from './admin-component/dashboard/dashboard.component';
import { ProductsComponent } from './admin-component/products/products.component';
import { NewReleaseComponent } from './admin-component/new-release/new-release.component';


@NgModule({
  declarations: [
    AdminModuleComponent,
    DashboardComponent,
    ProductsComponent,
    NewReleaseComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    
  ]
})
export class AdminModuleModule { }
