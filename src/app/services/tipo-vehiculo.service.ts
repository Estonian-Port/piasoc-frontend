import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { REST_SERVER_URL } from 'src/util/configuration';

export const TIPO_VEHICULO = '/tipoVehiculo'

@Injectable({
  providedIn: 'root'
})
export class TipoVehiculoService {

  constructor(private httpClient: HttpClient) { }

  async getAllTipoVehiculo(){
    const TipoVehiculoJSON$ = this.httpClient.get<string[]>(REST_SERVER_URL + TIPO_VEHICULO + '/getAll')
    return await lastValueFrom(TipoVehiculoJSON$)
  }
}
