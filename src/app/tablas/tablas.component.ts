import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/servicios/servicio.service';
import { Modeloproducto } from '../Modelos/ModeloProducto.component';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit {
   Productos: Modeloproducto[];
  
  
  constructor(private servicioService: ServicioService, ) {
   }

  ngOnInit(): void {
    this.cargarData();
  }

  cargarData() {
    this.servicioService.get('http://localhost:8080/producto/get')
      .subscribe((respuesta:any) => {
        console.log(respuesta);
        this.Productos = respuesta.data;
        console.log(this.Productos)
      });
  }
}





