import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//importando classes para criação das rotas
import { CadastroComponent } from "./cadastro/cadastro.component";
import { ConsultaComponent } from "./consulta/consulta.component";
import { EdicaoComponent } from "./edicao/edicao.component";

//crinando as rotas para navegação
const routes: Routes = [
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'consulta',
    component: ConsultaComponent
  },
  {
    path: 'edicao',
    component: EdicaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
