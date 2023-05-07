import { Component, OnInit } from '@angular/core';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  
itensCarrinho: IProdutoCarrinho [] = [];
total = 0;
  rounter: any;

  constructor(
    public carrinhoService: CarrinhoComponent
  ){}

  ngOnInit() : void{
    this.itensCarrinho = this.carrinhoService.obtemCarrinho() ;
  }

  calcularTotal(){
    this.total = this.itensCarrinho.reduce((prev, curr )=> prev + (curr.preco * curr.quantidade),0)


  }

  removerProdutoCarrinho(produtoId: number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calcularTotal();

  }

  comprar(){
    alert("Parabéns, você finalizou a sua compra!")
    this.carrinhoService.limparCarrinho();
    this.rounter.navigate(["produtos"]);
  }
  limparCarrinho() {
    throw new Error('Method not implemented.');
  }

  obtemCarrinho(): IProdutoCarrinho[] {
    throw new Error('Method not implemented.');
  }

}
