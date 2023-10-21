import { Component, OnInit } from '@angular/core';
import { Alojamiento } from 'src/app/model/Alojamiento';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {

  constructor(public reservaService : ReservaService) { }

  ngOnInit(): void {
    listaModelos = reservaService.getAllModelo()
  }

}
