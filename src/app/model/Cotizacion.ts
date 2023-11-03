import { Modelo } from "./Modelo"

export type CotizacionJSON = {
  id: number,
  modelo : Modelo
}

export class Cotizacion {
  
  constructor(
    public id: number,
    public modelo: Modelo,) {}

  static fromJson(CotizacionJSON: CotizacionJSON): Cotizacion {
    return new Cotizacion(
      CotizacionJSON.id,
      CotizacionJSON.modelo)
  }

  toJSON(): CotizacionJSON {
    return {
      id: this.id,
      modelo: this.modelo
    }
  }

}
