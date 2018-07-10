import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produtos';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: Produto;

  constructor(private route: ActivatedRoute,
    private sprod: ProdutoService,
    private scart: CartService,
    private router: Router) { }

  ngOnInit() {
    this.getProduto();
  }
  getProduto() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.sprod.getProduto(id).subscribe((prod) => { this.produto = prod });
  }

  addcart(){
    this.scart.add(this.produto);
    this.router.navigate(['checkout']); 
  }

}
