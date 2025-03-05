import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Iproducto } from '../iproducto';

@Component({
  selector: 'app-listadoproductos',
  standalone: false,
  templateUrl: './listadoproductos.component.html',
  styleUrl: './listadoproductos.component.css'
})
export class ListadoproductosComponent implements OnInit{
  
  productos!:Iproducto[];

  constructor(private servicioproductos:ProductosService){}
  
  ngOnInit(): void {
    this.servicioproductos.obtenerProductos().subscribe(
      (data)=>{
        this.productos=data
        console.log(this.productos);
      }
    );
  }

}
