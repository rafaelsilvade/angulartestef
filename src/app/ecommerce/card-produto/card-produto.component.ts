import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../produtos';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {
  
  @Input() produto:Produto;

  constructor(private scart: CartService, private router: Router) { }

  ngOnInit() {
  }

  addcart(){
    this.scart.add(this.produto);
    this.router.navigate(['checkout']); 
  }

}
