

export type AlojamientoJSON = {
  id: string ,
  nombre: string
  descripcion: string
  capacidad : number
  cantidadHabitaciones: number
  detalleAlojamiento: string
  cuentaConServicioDeLimpieza: Boolean
  precioBase: number
  tipoAlojamiento: string
  otrosAspectosATenerEnCuenta: string,
  idCreador : number,
  fechaDisponibles: Array<string>,
  precioTotal ?: number ,
	puntajePromedio? : number ,
	cantidadDePuntajes? : number,
  fueReservadoPorElUsuarioLogueado ?: boolean,
  puntuacionRecibidaPorElUsuario? : number,
  estaDisponibleParaSuReservaHoyEnAlgunaFecha ? :boolean
}


export class Alojamiento {
  
  constructor(public id: string = "",
    public nombre: string = "",
    public descripcion: string ="",
    public capacidad: number = 0,
    public cantidadHabitaciones: number =0,
    public detalleAlojamiento: string="",
    public cuentaConServicioDeLimpieza: Boolean = false,
    public precioBase: number = 0,
    public tipoAlojamiento: string = "departamento",
    public otrosAspectosATenerEnCuenta: string ="",
    public idCreador : number = 0,
    public precioTotal : number = 0 ,
    public puntajePromedio : number = 0,
    public cantidadDePuntajes : number = 0,
    public fueReservadoPorElUsuarioLogueado : boolean = false,
    public puntuacionRecibidaPorElUsuario? : number,
    public estaDisponibleParaSuReservaHoyEnAlgunaFecha :boolean =true
    ) {}


  static fromJson(alojamientoJSON: AlojamientoJSON): Alojamiento {
    return Object.assign(
      new Alojamiento() ,
      alojamientoJSON)
  }


  validarQueElAlojamientoEstaHabilitadoParaReservarHoy(){
    if(!this.estaDisponibleParaSuReservaHoyEnAlgunaFecha){
        throw new Error('Este alojamiento no esta disponible para realizar reservas');
    }
  }



  toJSON(): AlojamientoJSON {
    return {
      id: this.id,
      nombre: this.nombre,
      descripcion: this.descripcion,
      capacidad: this.capacidad,
      cantidadHabitaciones: this.cantidadHabitaciones,
      detalleAlojamiento: this.detalleAlojamiento,
      cuentaConServicioDeLimpieza: this.cuentaConServicioDeLimpieza,
      precioBase: this.precioBase,
      tipoAlojamiento: this.tipoAlojamiento,
      otrosAspectosATenerEnCuenta: this.otrosAspectosATenerEnCuenta,
      idCreador : this.idCreador,
      fechaDisponibles: [],
      precioTotal: this.precioTotal,
      puntajePromedio: 0,
      cantidadDePuntajes: 0
    }
  }

}
