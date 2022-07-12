import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nome:string = 'Maria Ester'
  idade:number = 28
  fruta:string = 'banana'

  constructor() { }

  ngOnInit(): void {
  }

  mudar(evento:any):void{
    this.fruta = evento
  }
  alterar(evento:any):void{
    this.fruta = evento.target.value
  }

}
