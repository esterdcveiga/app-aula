import { Component } from '@angular/core';
interface IContato{
  id:number
  nome:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Site Angular da Ester';
  nome:string = 'Ester'
  idade:number = 28

  contato: IContato = {
    id:1,
    nome: 'zé'
  }
}
