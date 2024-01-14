import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Marca, MarcaJSON } from '../model/Marca';
import { REST_SERVER_URL } from 'src/util/configuration';
import { HttpClient } from '@angular/common/http';

export const MARCA = '/marca'

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(private httpClient: HttpClient) { }

  async getAllByTipoVehiculo(tipoVehiculo : String) : Promise<Marca[]> {
    const marcasJSON$ = this.httpClient.get<MarcaJSON[]>(REST_SERVER_URL + MARCA +'/getAllByTipoVehiculo/' + tipoVehiculo)
    const marcas = await lastValueFrom(marcasJSON$)
    return marcas.map((marca) => Marca.fromJson(marca))
  }

}
