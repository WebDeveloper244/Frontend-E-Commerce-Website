import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './main-component/footer/footer.component';
import { HeaderComponent } from './main-component/header/header.component';
import { HomeComponent } from './main-component/home/home.component';
import { MainModuleComponent } from './main-module.component';

const routes: Routes = [{ path: '', component: MainModuleComponent,children:[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"header",
    component:HeaderComponent
  },
  {
    path:"footer",
    component:FooterComponent
  },
] },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
