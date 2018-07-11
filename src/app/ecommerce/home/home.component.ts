import { Component, OnInit } from '@angular/core';
import { Produto } from '../produtos';
import { ProdutoService } from '../produto.service';
import { PageEvent } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public produtos: Produto[];

  constructor(private sproduto: ProdutoService) { }

  ngOnInit() {
    this.sproduto.getProdutoPage(0, 5).subscribe((val)=>this.produtos = val);
  }
  
  paginator(event: PageEvent){
    console.log(event);
    this.sproduto.getProdutoPage(event.pageIndex, event.pageSize).subscribe((val)=>this.produtos = val);
  }
}
