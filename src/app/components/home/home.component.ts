import { Component, inject } from '@angular/core';
import { InfoUserService } from '../../services/info-user.service';
import { TestePropsComponent } from "../teste-props/teste-props.component";

@Component({
  selector: 'app-home',
  imports: [TestePropsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  meuBoolean = true;
  btn_top = "btn btn-green";
  // injeta o serviço "userInfo" no componente
  public UserLogado = inject(InfoUserService);
  mostrarEsterEgg = false;
  usuarios = [
    {id: 1, nome: "Gabriel Florindo", email: "gabrielflorindoduarte@gmail.com", idade: 18},
    {id: 2, nome: "Fulano de tal", email: "fulanodetal@gmail.com", idade: 83},
    {id: 3, nome: "Deltrano de tal", email: "deltranodetal@gmail.com", idade: 15},
  ]

  // pique useState do react para mudar o valor booleano
  atualizarBollean(value:boolean) {
    this.meuBoolean = value;
    console.log(`meu boolean = ${this.meuBoolean}`)
  }

  // testando alteração dinamica do btn com o boolean
  btnSubmit() {
    if (this.meuBoolean == true) {
      this.meuBoolean = false;
      this.btn_top = "btn btn-red";
    } else {
      this.meuBoolean = true;
      this.btn_top = "btn btn-green";
    }
  }

  teste_output(event: boolean) {
    this.mostrarEsterEgg = event;
  }
}
