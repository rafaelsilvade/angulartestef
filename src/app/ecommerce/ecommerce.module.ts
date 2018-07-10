import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatMenuModule, MatCardModule, MatFormFieldModule, MatInputModule, MatBadge, MatBadgeModule } from '@angular/material';
import { MyNavComponent } from './my-nav/my-nav.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { CardProdutoComponent } from './card-produto/card-produto.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FilterPipe } from './filter.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { ProdutoComponent } from './produto/produto.component';

@NgModule({
  imports: [    
    CommonModule,
    EcommerceRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,    
    MatCardModule,
    MatMenuModule,    
    MatGridListModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatBadgeModule

  ],
  declarations: [
    IndexComponent,
    MyNavComponent,
    HomeComponent,
    CardProdutoComponent,
    FilterPipe,
    CheckoutComponent,
    ProdutoComponent
  ]
})
export class EcommerceModule { }
