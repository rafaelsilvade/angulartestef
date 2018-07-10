import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Produto } from './produtos';
import { PRODUTOS } from './dbProduto';
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  getProdutos():Observable<Produto[]>{
    return of(PRODUTOS);
  }
  getProduto(id:number):Observable<Produto>{
    return of(PRODUTOS.find(pro => pro.Id === id));
  }
}
