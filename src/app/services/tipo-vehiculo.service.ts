import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { REST_SERVER_URL } from 'src/util/configuration';

@Injectable({
  providedIn: 'root'
})
export class TipoVehiculoService {

  constructor(private httpClient: HttpClient) { }

  async getAllTipoVehiculo(){
    const TipoVehiculoJSON$ = this.httpClient.get<String[]>(REST_SERVER_URL + '/tipoVehiculo/getAll')
    return await lastValueFrom(TipoVehiculoJSON$)
  }
}
