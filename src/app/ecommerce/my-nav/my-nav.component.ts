import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from '../cart.service';
import { Pedido } from '../pedidos';

@Component({
  selector: 'my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent {
  cartpedido: Pedido;
  total: number = 0;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver, private cart:CartService) {
    this.cartpedido = this.cart.get();
  }
  ngAfterContentChecked(){
    this.total = this.cart.totalqtde();
  }

  }
