import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nome:string = 'ester'
  idade:number = 28

  constructor() { }

  ngOnInit(): void {
  }

}
