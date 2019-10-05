import {RouterModule,Routes} from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { CarritoComponent } from './components/carrito/carrito.component';
const MisRutas:Routes=[
    {
        path:'listado',
        component:ListadoComponent
    },
    {
        path:'carrito',
        component:CarritoComponent
    }
];
export const RUTAS=RouterModule.forRoot(MisRutas);