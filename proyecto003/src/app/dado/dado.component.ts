import { Component } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: false,
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent {
  valor:number = 1;

  constructor(){
    this.valor=this.generaAleatorio();
  }

  generaAleatorio(){
    return Math.floor(Math.random()*6)+1;
  }

}
