import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './user/user.module';
import { RoutegaurdGuard } from './gaurd/routegaurd.guard';

const routes: Routes = [
  {path:"employee",loadChildren:()=>import('./user/user.module').then(m=>m.UserModule),canActivate:[RoutegaurdGuard]},
  {path:"user",loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
