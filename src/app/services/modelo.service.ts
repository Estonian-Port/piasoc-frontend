import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { REST_SERVER_URL } from 'src/util/configuration';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Modelo, ModeloJSON } from '../model/Modelo';

export const MODELO = '/modelo'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  constructor(private httpClient: HttpClient) { }

  async getAllByMarcaAndTipoVehiculo(tipoVehiculo: String, marca: String) {
    const modelosJSON$ = this.httpClient.put<ModeloJSON[]>(REST_SERVER_URL + MODELO +'/getAllByMarcaAndTipoVehiculo/' + tipoVehiculo, marca, httpOptions)
    const modelos = await lastValueFrom(modelosJSON$)
    return modelos.map((modelo) => Modelo.fromJson(modelo))
  }
  
}
