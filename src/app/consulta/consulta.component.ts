import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  nome: string = 'Ester'
  idade:number = 28
  dadosValidados: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  ativar():void{
    this.dadosValidados = !this.dadosValidados
  }

}
