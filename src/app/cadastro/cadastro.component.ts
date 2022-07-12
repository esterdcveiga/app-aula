import { Component, OnInit } from '@angular/core';
import { Icontato } from "../interfaces/IContato";


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  //nome:string = 'Maria Ester'
  //idade:number = 28
  //fruta:string = 'banana'

  constructor() { }

  ngOnInit(): void {
  }
  
  contatos: Icontato[] = []

  save(dados:any):void{
    let contato:Icontato = {nome:'', idade:0, email:''}
    contato.nome = dados.nome
    contato.idade = dados.idade
    contato.email = dados.email
    
    this.contatos.push(contato)
    console.log(this.contatos)
  }
/*
  mudar(evento:any):void{
    this.fruta = evento
  }
  alterar(evento:any):void{
    this.fruta = evento.target.value
  }*/

}
