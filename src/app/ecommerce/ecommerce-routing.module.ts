import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'checkout', component: CheckoutComponent },
{ path: 'produto/:id', component: ProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
