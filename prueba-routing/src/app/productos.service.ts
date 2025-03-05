import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL_BASE= "https://ejerciciostutorialesya.com/vue/datos.php";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private httpcliente:HttpClient) { 
  }
  //Metodos para las disticas operaciones de los productos
  //Metodo para rescatar todos
  
  //Rescatar un producto por id
  //Para dar de alta
  obtenerProductos(){
    return this.httpcliente.get<any>(`${URL_BASE}`);
  }
}
