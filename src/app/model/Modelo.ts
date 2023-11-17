import { Marca } from "./Marca"

export type ModeloJSON = {
  id: number,
  nombre: string,
  marca: Marca,
  tipoVehiculo: string 
}


export class Modelo {
  
  constructor(
    public id: number,
    public nombre: string,
    public marca: Marca,
    public tipoVehiculo : string) {}

  static fromJson(ModeloJSON: ModeloJSON): Modelo {
    return new Modelo(
      ModeloJSON.id,
      ModeloJSON.nombre,
      ModeloJSON.marca,
      ModeloJSON.tipoVehiculo)
  }

  toJSON(): ModeloJSON {
    return {
      id: this.id,
      nombre: this.nombre,
      marca: this.marca,
      tipoVehiculo: this.tipoVehiculo
    }
  }

}
