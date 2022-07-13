import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  idproduto:number = 0


  //depedências podem ser serviçõs, objetos, funções ou até um valor que a classe precisa para desempenhar sua função - a injeção de dependência é o processo no qual a dependência da qual a classe precisa é passada para ela (ou é injetada na classe)
  //no Angular as injeções de dependências são feitas através do construtor, especificando um paramêtro com o tipo da dependência e colocando o modificador private, o que o torna um atributo da classe

  //fazendo injeção de dependencia da ActivatedRoute
  constructor(private route: ActivatedRoute) { }
  //o ActivatedRoute permite acessar informações da rota ativa no momento (parâmetros e demais valores)

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap
    //snapshot - cópia instatânea da rota
    //paramMap - contém um mapa dos parâmetros opcionais e obrigatórios da rota
    console.log(routeParams)
    this.idproduto =Number( routeParams.get('idproduto'))//captura o calor do parâmetro idproduto da rota ativada e passando seu valor para o atributo idproduto local, permitindo que ele seja utilizado no código
  }

}
