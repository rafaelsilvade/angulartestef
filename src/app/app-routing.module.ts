import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [{path:'', loadChildren:'./ecommerce/ecommerce.module#EcommerceModule'}];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
