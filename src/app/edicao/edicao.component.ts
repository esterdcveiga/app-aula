import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})
export class EdicaoComponent implements OnInit {
  blocoVisivel: boolean = false
  nomeBotao:string = 'show'

  constructor() { }

  ngOnInit(): void {
  }

  show():void{
    this.blocoVisivel= !this.blocoVisivel
    if (this.blocoVisivel == false) {
      //this.blocoVisivel = true
      this.nomeBotao='hide'
    } else {
      //this.blocoVisivel = false
      this.nomeBotao='show'     
    }
  }
  

}
