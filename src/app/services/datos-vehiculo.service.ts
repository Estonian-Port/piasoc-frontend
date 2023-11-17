import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { REST_SERVER_URL } from 'src/util/configuration';

export const DATOS_VEHICULO = '/datosVehiculo'

@Injectable({
  providedIn: 'root'
})
export class DatosVehiculoService {

  constructor(private httpClient: HttpClient) { }

  async getAllIntervaloEdad(){
    const intervaloEdadJSON$ = this.httpClient.get<string[]>(REST_SERVER_URL + DATOS_VEHICULO + '/intervaloEdad/getAll')
    return await lastValueFrom(intervaloEdadJSON$)
  }

  async getAlliIntervaloKilometros(){
    const intervaloKilometrosJSON$ = this.httpClient.get<string[]>(REST_SERVER_URL + DATOS_VEHICULO + '/intervaloKilometros/getAll')
    return await lastValueFrom(intervaloKilometrosJSON$)
  }

  async getAllTipoSeguro(){
    const tipoSeguroJSON$ = this.httpClient.get<string[]>(REST_SERVER_URL + DATOS_VEHICULO + '/tipoSeguro/getAll')
    return await lastValueFrom(tipoSeguroJSON$)
  }
}
