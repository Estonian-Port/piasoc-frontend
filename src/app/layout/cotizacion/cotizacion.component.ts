import { Component, OnInit, ViewChild } from '@angular/core';
import { Marca } from 'src/app/model/Marca';
import { Modelo } from 'src/app/model/Modelo';
import { ModeloService } from 'src/app/services/modelo.service';
import { MarcaService } from 'src/app/services/marca.service';
import { TipoVehiculoService } from 'src/app/services/tipo-vehiculo.service';
import { GenericItem } from 'src/app/model/GenericItem';
import { Router } from '@angular/router';
import { CotizacionDTO } from 'src/app/model/Cotizacion';
import { Cliente } from 'src/app/model/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { DatosVehiculoService } from 'src/app/services/datos-vehiculo.service';
import { CotizacionService } from 'src/app/services/cotizacion.service';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {

  listaTipoVehiculo: string[] = []
  listaMarca: Array<Marca> = []
  listaModelo: Array<Modelo> = []
  listaAnio: number[] = []

  listaSexo: string[] = []
  listaIntervaloEdad: string[] = []
  listaIntervaloKilometros: string[] = []
  listaTipoSeguro: string[] = []

  // TODO Borrar y pasar bien a el modal
  cliente : Cliente = new Cliente(0,"","","Sexo",0,new Date(),"","","",0,"",0)

  step : number = 1
  listaStepBox : Array<GenericItem> = [
    new GenericItem(1, "Tipo de vehículo"),
    new GenericItem(2, "Datos del vehículo"),
    new GenericItem(3, "Seguro"),
    new GenericItem(4, "Contacto"),
  ]

  botonSiguienteFinalizado : string = "Siguiente"
  botonAtrasDisabled = true

  formGroup!: FormGroup
  submited : Boolean = false

  @ViewChild(ModalComponent) 
  modal!: ModalComponent;

  spinnerVisible = false

  constructor(public tipoVehiculoService : TipoVehiculoService, public marcaService : MarcaService, 
    public modeloService : ModeloService, public router : Router, public clienteService : ClienteService,
    public datosVehiculoService : DatosVehiculoService, public cotizacionService : CotizacionService,
    private formBuilder: FormBuilder) {

      this.formGroup = this.formBuilder.group({
        datosVehiculoDto: this.formBuilder.group({
          tipoVehiculo: new FormControl('', [Validators.required]),
          marca: new FormControl('', [Validators.required]),
          modelo: new FormControl('', [Validators.required]),
          anio: new FormControl('', [Validators.required]),

          particular: new FormControl(false, [Validators.required]),
          alarma: new FormControl(false, [Validators.required]),
          garaje: new FormControl(false, [Validators.required]),
          hijos: new FormControl(false, [Validators.required]),

          intervaloKilometros: new FormControl('', [Validators.required]),
          intervaloEdad: new FormControl('', [Validators.required]),
          tipoSeguro: new FormControl('', [Validators.required]),
        }),
        cliente: this.formBuilder.group({
          nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
          apellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
          cuil: new FormControl('', [Validators.required, Validators.min(999999999)]),
          email: new FormControl('', [Validators.required, Validators.email]),
          ciudad: new FormControl('', [Validators.required, Validators.minLength(3)]),
          provincia: new FormControl('', [Validators.required, Validators.minLength(3)]),
          codigoPostal: new FormControl('', [Validators.required, Validators.min(999)]),
          celular: new FormControl('', [Validators.required, Validators.min(999999999)]),
          sexo: new FormControl('', [Validators.required]),
          fechaNacimiento: new FormControl('', [Validators.required]),
          empresa: new FormControl('')
        })
      })

  }

  get tipoVehiculo(){ return this.formGroup.get('datosVehiculoDto')?.get('tipoVehiculo') }
  get marca(){ return this.formGroup.get('datosVehiculoDto')?.get("marca") }
  get modelo(){ return this.formGroup.get('datosVehiculoDto')?.get("modelo") }
  get anio(){ return this.formGroup.get('datosVehiculoDto')?.get("anio") }

  get particular(){ return this.formGroup.get('datosVehiculoDto')?.get("particular") }
  get alarma(){ return this.formGroup.get('datosVehiculoDto')?.get("alarma") }
  get garaje(){ return this.formGroup.get('datosVehiculoDto')?.get("garage") }
  get hijos(){ return this.formGroup.get('datosVehiculoDto')?.get("hijos") }

  get intervaloKilometros(){ return this.formGroup.get('datosVehiculoDto')?.get("intervaloKilometros") }
  get intervaloEdad(){ return this.formGroup.get('datosVehiculoDto')?.get("intervaloEdad") }
  get tipoSeguro(){ return this.formGroup.get('datosVehiculoDto')?.get("tipoSeguro") }

  get nombre(){ return this.formGroup.get('cliente')?.get("nombre") }
  get apellido(){ return this.formGroup.get('cliente')?.get("apellido") }
  get cuil(){ return this.formGroup.get('cliente')?.get("cuil") }
  get email(){ return this.formGroup.get('cliente')?.get("email") }
  get ciudad(){ return this.formGroup.get('cliente')?.get("ciudad") }
  get provincia(){ return this.formGroup.get('cliente')?.get("provincia") }
  get codigoPostal(){ return this.formGroup.get('cliente')?.get("codigoPostal") }
  get celular(){ return this.formGroup.get('cliente')?.get("celular") }
  get sexo(){ return this.formGroup.get('cliente')?.get("sexo") }
  get fechaNacimiento(){ return this.formGroup.get('cliente')?.get("fechaNacimiento") }

  
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
    this.formGroup.get('datosVehiculoDto')?.get('marca')?.setValue("")
  }

  cleanModelo(){
    this.listaModelo = []
    this.formGroup.get('datosVehiculoDto')?.get('modelo')?.setValue("")
  }

  async getListaMarcaByTipoVehiculo(){
    this.cleanMarca()
    this.cleanModelo()

    this.listaMarca = await this.marcaService.getAllByTipoVehiculo(
      this.formGroup.get('datosVehiculoDto')?.get('tipoVehiculo')?.value)
  }

  async getAllByMarcaAndTipoVehiculo(){
    this.cleanModelo()
    this.listaModelo = await this.modeloService.getAllByMarcaAndTipoVehiculo(
      this.formGroup.get('datosVehiculoDto')?.get('tipoVehiculo')?.value, 
      this.formGroup.get('datosVehiculoDto')?.get('marca')?.value)
  }

  //-------------- Stepper ----------------------
  
  isStep(step : number) : boolean{
    return this.step == step
  }

  async siguiente(){

    if(this.step >= 1 && this.step < this.listaStepBox.length){
      this.step += 1
    }else{
      this.enviarFormulario()
    }

    this.botonAtrasDisabledChange()

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
  
  async enviarFormulario() {

    this.submited = true

    if(this.formGroup.valid){

      this.spinnerVisible = true

      try{
        let res = await this.cotizacionService.save(new CotizacionDTO(this.formGroup.value))
        this.cliente = new CotizacionDTO(this.formGroup.value).cliente
        this.modal.mostrarModal()
      }catch(error){
        console.log(error);
        this.spinnerVisible = false
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
