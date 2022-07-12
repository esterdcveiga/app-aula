import { Component, OnInit } from '@angular/core';

interface IProduro{
  id:number;
  descricao:string;
  preco:number;   
}

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  /* 
  nome: string = 'Ester'
  idade:number = 28
  dadosValidados: boolean = true
  
  ativar():void{
    this.dadosValidados = !this.dadosValidados
  }
  
  */

  produtos:IProduro[] = [
    {
      id: 1,
      descricao: 'feijao',
      preco: 10
    },
    {
      id: 2,
      descricao: 'arroz',
      preco: 8
    },
    {
      id: 3,
      descricao: 'ovo',
      preco: 10
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
