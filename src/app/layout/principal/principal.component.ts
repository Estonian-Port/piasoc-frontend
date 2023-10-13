import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core'
import { Alojamiento } from 'src/app/model/Alojamiento'
import { ReservaService } from 'src/app/services/reserva.service';
import { ErrorMensaje } from 'src/util/errorHandler';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  listaAlojamiento: Alojamiento[] = []
  errorIrAlojamiento: ErrorMensaje = new ErrorMensaje(false, '')
  cantidad = 3
  totalDeAlojamientos = 0
  traerMas : Boolean = true
  filtrado = true

  constructor(private router: Router) {}

  async ngOnInit() {

  }

  inicializar(listaAlojamiento : Alojamiento[]) {
    this.listaAlojamiento = listaAlojamiento
    this.filtrado = false
  }
  quitarBoton(quitar: boolean) {
    this.filtrado = false
  }
  mostrarMas(){
    if(this.cantidad<this.totalDeAlojamientos){
          this.cantidad = this.cantidad +3
          this.ngOnInit()
    }

  }

  seleccionarAlojamiento(alojamiento: Alojamiento){
    this.errorIrAlojamiento.condicional = false


    this.router.navigate(["/detalle/", alojamiento.id])

  }

  listaEstaVacia() {
    return this.listaAlojamiento.length == 0
  }
}
