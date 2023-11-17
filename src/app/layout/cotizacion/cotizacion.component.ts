import { Component, OnInit } from '@angular/core';
import { Marca } from 'src/app/model/Marca';
import { Modelo } from 'src/app/model/Modelo';
import { ModeloService } from 'src/app/services/modelo.service';
import { MarcaService } from 'src/app/services/marca.service';
import { TipoVehiculoService } from 'src/app/services/tipo-vehiculo.service';
import { GenericItem } from 'src/app/model/GenericItem';
import { Router } from '@angular/router';
import { Cotizacion } from 'src/app/model/Cotizacion';
import { DatosVehiculo } from 'src/app/model/DatosVehiculo';
import { Cliente } from 'src/app/model/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { DatosVehiculoService } from 'src/app/services/datos-vehiculo.service';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {

  listaTipoVehiculo: string[] = []
  tipoVehiculoSeleccionado: string = "Tipo Vehiculo"

  listaMarca: Array<Marca> = []
  marcaSeleccionada: string = "Marca"

  listaModelo: Modelo[] = []
  modeloSeleccionado: string = "Modelo"

  listaAnio: number[] = []
  anioSeleccionado: any = "Año"

  listaSexo: string[] = []
  listaIntervaloEdad: string[] = []
  listaIntervaloKilometros: string[] = []
  listaTipoSeguro: string[] = []

  datosVehiculo : DatosVehiculo = new DatosVehiculo(0,"",false,false,false,false,0,0,0)
  cliente : Cliente = new Cliente(0,"","","Sexo",0,new Date(),"","","",0,"",0,"")
  cotizacion : Cotizacion = new Cotizacion(0,this.datosVehiculo,this.cliente)

  step : number = 1
  listaStepBox : Array<GenericItem> = [
    new GenericItem(1, "Tipo de Vehiculo"),
    new GenericItem(2, "Datos del vehiculo"),
    new GenericItem(3, "Seguro"),
    new GenericItem(4, "Contacto"),
  ]

  botonSiguienteFinalizado : string = "Siguiente"
  botonAtrasDisabled = true

  constructor(public tipoVehiculoService : TipoVehiculoService, public marcaService : MarcaService, 
    public modeloService : ModeloService, public router : Router, public clienteService : ClienteService,
    public datosVehiculoService : DatosVehiculoService) { }

  async ngOnInit(): Promise<void> {
    
    this.listaTipoVehiculo = await this.tipoVehiculoService.getAllTipoVehiculo()

    this.listaSexo = await this.clienteService.getAllSexo()
    
    this.listaIntervaloEdad = await this.datosVehiculoService.getAllIntervaloEdad()
    this.listaIntervaloKilometros = await this.datosVehiculoService.getAlliIntervaloKilometros()
    this.listaTipoSeguro = await this.datosVehiculoService.getAllTipoSeguro()

    const range = (start: number, end: number) => Array.from({ length: (end - start) }, (v, k) => k + start);

    this.listaAnio = range(1995, 2024);
  }

  cleanMarca(){
    this.listaMarca = []
    this.marcaSeleccionada = "Marca"
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
    this.listaModelo = await this.modeloService.getAllByMarcaAndTipoVehiculo(this.tipoVehiculoSeleccionado, this.marcaSeleccionada)
  }



  //-------------- Stepper ----------------------
  
  isStep(step : number) : boolean{
    return this.step == step
  }

  async siguiente(){

    if(this.step >= 1 && this.step < this.listaStepBox.length + 1){
      this.step += 1
    }

    this.botonAtrasDisabledChange()

    this.enviarFormulario()

    this.botonSiguienteChangeName()

  }
  
  atras(){

    if(this.step > 1 && this.step <= this.listaStepBox.length + 1){
      this.step -= 1
    }

    this.botonSiguienteChangeName()

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

      this.datosVehiculo.modelo = this.modeloSeleccionado

      console.log(this.cotizacion)
      /*
      try{
        //await this.eventoService.save(this.evento)
        this.router.navigateByUrl('/')
      }catch(error){
        //this.eventoSaveError.condicional = true
      }

      */
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
