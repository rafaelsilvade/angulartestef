import { Component, OnInit } from '@angular/core';
import { Produto } from '../produtos';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public produtos: Produto[];

  constructor(private sproduto: ProdutoService) { }

  ngOnInit() {
    this.sproduto.getProdutos().subscribe((val) => this.produtos = val);
  }
  
}
