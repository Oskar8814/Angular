import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto001';
  nombre = 'pedro';
  edad = 12;
  fumador = false;
  sueldos = [1200,1500,1700];
  provincias=[
    {id:1, nombre:"Huelva"},
    {id:2, nombre:"Sevilla"},
    {id:3, nombre:"Almeria"},
    {id:4, nombre:"Cordoba"},
    {id:5, nombre:"Cadiz"}
  ];

  contador = 0;

  esFumador (){
    return this.fumador?"Es fumador":"No es fumador";
  }

  diHola(){
    alert('Hola');
  }

  incrementar(){
    this.contador++;
  }

  decrementar(){
    this.contador--;
  }
}

