import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { REST_SERVER_URL } from 'src/util/configuration';
import { HttpClient } from '@angular/common/http';
import { Modelo, ModeloJSON } from '../model/Modelo';

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

  async getAllModelo(){
    const modeloJSON$ = this.httpClient.get<ModeloJSON[]>(REST_SERVER_URL + '/modelo/getAll')
    const modelos = await lastValueFrom(modeloJSON$)
    return modelos.map((modelo) => Modelo.fromJson(modelo))
  }

}
