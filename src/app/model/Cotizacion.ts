import { Cliente } from "./Cliente"
import { DatosVehiculoDTO } from "./DatosVehiculo"

export type CotizacionJSON = {
  id: number,
  datosVehiculoDto : DatosVehiculoDTO,
  cliente : Cliente
}

export class CotizacionDTO {
  
  constructor(
    public id: number,
    public datosVehiculoDto : DatosVehiculoDTO,
    public cliente : Cliente) {}

  static fromJson(CotizacionJSON: CotizacionJSON): CotizacionDTO {
    return new CotizacionDTO(
      CotizacionJSON.id,
      CotizacionJSON.datosVehiculoDto,
      CotizacionJSON.cliente)
  }

  toJSON(): CotizacionJSON {
    return {
      id: this.id,
      datosVehiculoDto: this.datosVehiculoDto,
      cliente : this.cliente
    }
  }

}
