import { Component, OnInit } from '@angular/core';
declare var $: any; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto004';

  valor1!:number;
  valor2!:number;
  valor3!:number;

  resultado="";

  constructor(){
    this.lanzarDados();
  }
  ngOnInit(): void {
    $('[data-bs-toggle="popover"]').popover();
  }

  comprobarResultado(){
    if (this.valor1==this.valor2 && this.valor1==this.valor3) {
      this.resultado = "Has ganado!"
    }else{
      this.resultado = "Has perdido!"
    }
  }

  lanzarDados(){
    this.valor1=this.generaAleatorio();
    this.valor2=this.generaAleatorio();
    this.valor3=this.generaAleatorio();
    this.comprobarResultado();
  }


  generaAleatorio(){
    return Math.floor(Math.random()*6)+1;
  }

}
