import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CotizacionDTO } from '../model/Cotizacion';
import { REST_SERVER_URL } from 'src/util/configuration';
import { lastValueFrom } from 'rxjs';

export const COTIZACION = '/cotizacion'

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {

  constructor(private httpClient: HttpClient) { }


  async save(cotizacion : CotizacionDTO) {
    const item$ = this.httpClient.post<String>(REST_SERVER_URL + COTIZACION + '/save', cotizacion.toJSON())
    return await lastValueFrom(item$)
  }
}
