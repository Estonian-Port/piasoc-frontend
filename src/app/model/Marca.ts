export type MarcaJSON = {
  id: number,
  nombre: String
}

export class Marca {
  constructor(
    public id: number,
    public nombre: string,
  ) {}  
}