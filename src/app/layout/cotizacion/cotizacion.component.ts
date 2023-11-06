import { Component, OnInit } from '@angular/core';
import { Marca } from 'src/app/model/Marca';
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
  tipoVehiculoSeleccionado: String = "Tipo Vehiculo"

  listaMarca: Array<Marca> = []
  marcaIdSeleccionada: String = ""

  listaModelo: Modelo[] = []
  modeloSeleccionado: String = ""

  constructor(public tipoVehiculoService : TipoVehiculoService, public modeloService : ModeloService, ) { }

  async ngOnInit(): Promise<void> {
    
    this.listaTipoVehiculo = await this.tipoVehiculoService.getAllTipoVehiculo()
    
  }

  cleanMarca(){
    this.listaMarca = []
    this.marcaIdSeleccionada = "Marca"
  }

  cleanModelo(){
    this.listaModelo = []
    this.modeloSeleccionado = "Modelo"
  }

  async getListaMarcaByTipoVehiculo(){
    this.cleanMarca()
    this.cleanModelo()

    this.listaMarca = await this.modeloService.getListaMarcaByTipoVehiculo(this.tipoVehiculoSeleccionado)
  }

  async getAllByMarcaAndTipoVehiculo(){
    this.cleanModelo()
    this.listaModelo = await this.modeloService.getAllByMarcaAndTipoVehiculo(this.tipoVehiculoSeleccionado, this.marcaIdSeleccionada)
  }
  
}
