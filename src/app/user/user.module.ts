import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeComponent } from './employe/employe.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    EmployeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
    
  ]
})
export class UserModule { }
