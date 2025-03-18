import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-teste-props',
  imports: [CommonModule],
  templateUrl: './teste-props.component.html',
  styleUrl: './teste-props.component.css'
})
export class TestePropsComponent {
  teste = true

  // RECEBENDO informação do componente pai (home)
  @Input("stringProps") props!: string;

  // ENVIANDO informação para o componente pai (home)
  @Output() emitindoValorTeste = new EventEmitter<boolean>();

  click_btn() {
    // voltando o valor para home com output e eventEmitter
    this.emitindoValorTeste.emit(this.teste)
  }
}
