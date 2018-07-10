import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Pedido } from '../pedidos';
import { Item } from '../itens';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartpedido: Pedido;
  total: number = 0;
  constructor(private scart: CartService) {    
    this.cartpedido = this.scart.get();
    
  }

  ngOnInit() {
    
  }

  delete(item: Item){
    this.scart.delete(item);
  }
  ngAfterContentChecked(){
    this.total = this.scart.total();
  }

}
