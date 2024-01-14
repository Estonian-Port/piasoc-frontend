import { Cliente } from "./Cliente"
import { DatosVehiculoDTO } from "./DatosVehiculo"

export type CotizacionJSON = {
  id: number,
  datosVehiculoDto : DatosVehiculoDTO,
  cliente : Cliente
}

export class CotizacionDTO {
  
  id: number = 0
  datosVehiculoDto!: DatosVehiculoDTO
  cliente!: Cliente

  constructor(init?: Partial<CotizacionDTO>) {
    Object.assign(this, init);
   }

  static fromJson(cotizacionJSON: CotizacionJSON): CotizacionDTO {
    return new CotizacionDTO(cotizacionJSON)
  }

  toJSON(): CotizacionJSON {
    return {
      id: this.id,
      datosVehiculoDto: this.datosVehiculoDto,
      cliente : this.cliente
    }
  }

}
