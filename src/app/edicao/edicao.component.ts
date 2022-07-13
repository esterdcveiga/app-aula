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

  //mótodo que altera valor do atributo bloco sempre que o botão é cllicado e altera também o texto referente ao nome do botão de acordo com o valor do atributo blocoVisivel
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
