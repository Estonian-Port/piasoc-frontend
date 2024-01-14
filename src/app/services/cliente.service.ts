import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { REST_SERVER_URL } from 'src/util/configuration';

export const CLIENTE = '/cliente'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) { }


  async getAllSexo(){
    const SexoJSON$ = this.httpClient.get<string[]>(REST_SERVER_URL + CLIENTE + '/sexo/getAll')
    return await lastValueFrom(SexoJSON$)
  }

}
