import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/servicios/servicio.service';
import { stockModelo } from '../Modelos/ModeloStock.component';


/////
@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.css']
})
export class VenderComponent implements OnInit {
   stock: stockModelo[];
   

 unidades:number= 0;
 producto:string = "";
 tienda:string = "";

  constructor(private servicioService: ServicioService, ) {
   }

  ngOnInit(): void {
    this.cargarData();

  }

  cargarData() {
    this.servicioService.get('http://localhost:8080/producto/stock')
      .subscribe((respuesta:any) => {
        console.log(respuesta);
        this.stock = respuesta.data;
        console.log(this.stock)
      });
  }

   ActualizarC(codigoProducto1: string, unidades1: string, tienda1: string) {
    const unidades2 = parseInt(unidades1);
    const tienda2 = parseInt(tienda1);
    const data = { unidades: unidades2, producto: codigoProducto1, tienda: tienda2 };
    this.servicioService.update(data).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );

}
ActualizarV(codigoProducto1: string, unidades1: string, tienda1: string) {
  var unidades2 = parseInt(unidades1);
  var tienda2 = parseInt(tienda1);
  unidades2 = unidades2* (-1);
  
  const data = { unidades: unidades2, producto: codigoProducto1, tienda: tienda2 };
  this.servicioService.update(data).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  );

}
// components/catalogo/catalogo.component.ts

}





