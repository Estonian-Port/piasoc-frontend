import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { REST_SERVER_URL } from 'src/util/configuration';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Modelo, ModeloJSON } from '../model/Modelo';
import { Marca, MarcaJSON } from '../model/Marca';

export const MODELO = '/modelo'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  constructor(private httpClient: HttpClient) { }
  
  /*
  async post(--) {
    await lastValueFrom(this.httpClient.post(REST_SERVER_URL + '/--', --))
  }
  */

  async getAllModelo(): Promise<Modelo[]>{
    const modelosJSON$ = this.httpClient.get<ModeloJSON[]>(REST_SERVER_URL + MODELO + '/getAll')
    const modelos = await lastValueFrom(modelosJSON$)
    return modelos.map((modelo) => Modelo.fromJson(modelo))
  }

  async getListaMarcaByTipoVehiculo(tipoVehiculo : String) : Promise<Marca[]> {
    const marcasJSON$ = this.httpClient.get<MarcaJSON[]>(REST_SERVER_URL + MODELO +'/getListaMarcaByTipoVehiculo/' + tipoVehiculo)
    const marcas = await lastValueFrom(marcasJSON$)
    return marcas.map((marca) => Marca.fromJson(marca))
  }



  async getAllByMarcaAndTipoVehiculo(tipoVehiculo: String, marca: String) {
    const modelosJSON$ = this.httpClient.put<ModeloJSON[]>(REST_SERVER_URL + MODELO +'/getAllByMarcaAndTipoVehiculo/' + tipoVehiculo, marca, httpOptions)
    const modelos = await lastValueFrom(modelosJSON$)
    return modelos.map((modelo) => Modelo.fromJson(modelo))
  }
  
}
