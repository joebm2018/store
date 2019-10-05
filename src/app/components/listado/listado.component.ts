import { Component, OnInit ,OnDestroy} from '@angular/core';
import { TiendaService } from '../../services/tienda.service';
import { Subscription } from 'rxjs';
import {CarritoService } from '../../services/carrito.service'

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

 
  subscripcion:Subscription;
  productos:any;

  subsCarrito:Subscription;
  miCarrito:any;

  constructor(private _sTienda:TiendaService,
              private _sCarrito:CarritoService) { }

  ngOnInit() {
    this.subscripcion=this._sTienda.getProductos().subscribe((datos)=>{
      this.productos=datos;
    });
    this.subsCarrito=this._sCarrito.carritoActual.subscribe(datosProductos =>{
      this.miCarrito=datosProductos;
    });
  }

  anadirProducto(producto:any){
    this.miCarrito.push(producto);
    this._sCarrito.modificarCarrito(this.miCarrito);
    console.log(this.miCarrito);
    
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscripcion.unsubscribe();
    this.subsCarrito.unsubscribe();
  }

}
