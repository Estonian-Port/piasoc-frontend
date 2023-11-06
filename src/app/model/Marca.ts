export type MarcaJSON = {
  id: number,
  nombre: String
}

export class Marca {
  constructor(
    public id: number,
    public nombre: String
  ) {}

  toJSON(): MarcaJSON {
    return {
      id: this.id,
      nombre: this.nombre
    }
  }

  static fromJson(marcaJSON: MarcaJSON): any {
    return new Marca(
      marcaJSON.id,
      marcaJSON.nombre)
  }

}