import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { HeaderComponent } from './main-component/header/header.component';
import { FooterComponent } from './main-component/footer/footer.component';
import { HomeComponent } from './main-component/home/home.component';
import { AboutUsComponent } from './main-component/about-us/about-us.component';



@NgModule({
  declarations: [
    MainModuleComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule,
    
  ]
})
export class MainModuleModule { }
