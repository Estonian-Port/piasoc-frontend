import { Cliente } from "./Cliente"
import { DatosVehiculo } from "./DatosVehiculo"

export type CotizacionJSON = {
  id: number,
  datosVehiculo : DatosVehiculo,
  cliente : Cliente
}

export class Cotizacion {
  
  constructor(
    public id: number,
    public datosVehiculo : DatosVehiculo,
    public cliente : Cliente) {}

  static fromJson(CotizacionJSON: CotizacionJSON): Cotizacion {
    return new Cotizacion(
      CotizacionJSON.id,
      CotizacionJSON.datosVehiculo,
      CotizacionJSON.cliente)
  }

  toJSON(): CotizacionJSON {
    return {
      id: this.id,
      datosVehiculo: this.datosVehiculo,
      cliente : this.cliente
    }
  }

}
