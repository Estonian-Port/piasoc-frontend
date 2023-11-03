import { Component, OnInit } from '@angular/core';
import { Modelo } from 'src/app/model/Modelo';
import { ModeloService } from 'src/app/services/modelo.service';
import { TipoVehiculoService } from 'src/app/services/tipo-vehiculo.service';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {

  listaTipoVehiculo: String[] = []
  listaModelo: Modelo[] = []

  constructor(public tipoVehiculoService : TipoVehiculoService, public modeloService : ModeloService, ) { }

  async ngOnInit(): Promise<void> {

    this.listaTipoVehiculo = await this.tipoVehiculoService.getAllTipoVehiculo()
    console.log(this.listaTipoVehiculo)

    this.listaModelo = await this.modeloService.getAllModelo()
    console.log(this.listaModelo)
  }

}
