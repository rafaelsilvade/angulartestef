import { Injectable } from '@angular/core';
import { Pedido } from './pedidos';
import { Produto } from './produtos';
import { Item } from './itens';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Pedido = new Pedido();

  constructor() {
  }

  add(produto: Produto, qtde: number = 1) {
    let p: Item = (this.checkproduto(produto));
    if (p == null) {
      let i = new Item();
      i.produto = produto;
      i.qtde = qtde;

      this.cart.itens.push(i);
    } else {
      p.qtde++;
    }

  }

  get(): Pedido {
    return this.cart;
  }

  private checkproduto(produto: Produto): Item {
    return this.cart.itens.find((value) => {
      return (value.produto.Id === produto.Id);
    });
  }

  delete(item: Item) {
    let i = this.cart.itens.indexOf(item);
    this.cart.itens.splice(i, 1);
  }

  total(): number {
    let total: number = 0;
    this.cart.itens.forEach((item) => {
      total += (item.produto.preco * item.qtde);
    });
    return total;
  }
  totalqtde(): number {
    let total: number = 0;
    this.cart.itens.forEach((item) => {
      total += item.qtde;
    });
    return total;
  }

}
