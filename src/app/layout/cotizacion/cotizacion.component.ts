import { Component, OnInit } from '@angular/core';
import { Marca } from 'src/app/model/Marca';
import { Modelo } from 'src/app/model/Modelo';
import { ModeloService } from 'src/app/services/modelo.service';
import { MarcaService } from 'src/app/services/marca.service';
import { TipoVehiculoService } from 'src/app/services/tipo-vehiculo.service';
import { GenericItem } from 'src/app/model/GenericItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {

  listaTipoVehiculo: String[] = []
  tipoVehiculoSeleccionado: String = "Tipo Vehiculo"

  listaMarca: Array<Marca> = []
  marcaIdSeleccionada: String = "Marca"

  listaModelo: Modelo[] = []
  modeloSeleccionado: String = "Modelo"

  listaAnio: number[] = []
  anioSeleccionado: any = "Año"

  step : number = 1
  listaStepBox : Array<GenericItem> = [
    new GenericItem(1, "Tipo de Vehiculo"),
    new GenericItem(2, "Datos del vehiculo"),
    new GenericItem(3, "Seguro"),
    new GenericItem(4, "Contacto"),
  ]

  botonSiguienteFinalizado : string = "Siguiente"
  botonAtrasDisabled = true

  constructor(public tipoVehiculoService : TipoVehiculoService, public marcaService : MarcaService, public modeloService : ModeloService, public router : Router) { }

  async ngOnInit(): Promise<void> {
    
    this.listaTipoVehiculo = await this.tipoVehiculoService.getAllTipoVehiculo()

    const range = (start: number, end: number) => Array.from({ length: (end - start) }, (v, k) => k + start);

    this.listaAnio = range(1995, 2024);
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

    this.listaMarca = await this.marcaService.getAllByTipoVehiculo(this.tipoVehiculoSeleccionado)
  }

  async getAllByMarcaAndTipoVehiculo(){
    this.cleanModelo()
    this.listaModelo = await this.modeloService.getAllByMarcaAndTipoVehiculo(this.tipoVehiculoSeleccionado, this.marcaIdSeleccionada)
  }




  //-------------- Stepper ----------------------
  
  isStep(step : number) : boolean{
    return this.step == step
  }

  async siguiente(){

    this.botonAtrasDisabledChange()

    if(this.step >= 1 && this.step < this.listaStepBox.length + 1){
      this.step += 1
    }

    this.enviarFormulario()

    this.botonSiguienteChangeName()

  }
  
  atras(){
    this.botonSiguienteChangeName()
    //this.eventoSaveError.condicional = false

    if(this.step > 1 && this.step <= this.listaStepBox.length + 1){
      this.step -= 1
    }

    this.botonAtrasDisabledChange()

  }

  stepBoxSelected(step : number){
    this.step = step
    
    this.botonAtrasDisabledChange()

    this.botonSiguienteChangeName()
  }
  
  enviarFormulario() {
    if(this.step == this.listaStepBox.length + 1){
      //this.eventoSaveError.condicional = false

      try{
        //await this.eventoService.save(this.evento)
        this.router.navigateByUrl('/')
      }catch(error){
        //this.eventoSaveError.condicional = true
      }
    }
  }

  botonSiguienteChangeName(){
    if(this.step == this.listaStepBox.length){
      this.botonSiguienteFinalizado = "Cotizar"
    }else{
      this.botonSiguienteFinalizado = "Siguiente"
    }
  }

  botonAtrasDisabledChange(){
    this.botonAtrasDisabled = this.step == 1
  }
}
