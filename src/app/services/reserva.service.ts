import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { REST_SERVER_URL } from 'src/util/configuration';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private httpClient: HttpClient) { }
  
  /*reserva = new Reserva(0,"",0,new Date(), new Date(),1)

  async reservarAlojamiento(reserva: Reserva) {

    console.log("A reservar",reserva)
    await lastValueFrom(this.httpClient.post(REST_SERVER_URL + '/reservarAlojamiento', reserva))
  }

  async obtenerUnComentario( comentario : Calificacion){
    const comentario$ = this.httpClient.get<CalificacionJSON>(
      REST_SERVER_URL + `/getCalificacion/${comentario.usuarioCalificadorID}/${comentario.alojamientoID}`)
    const unComentario= await lastValueFrom(comentario$)
    return Calificacion.fromJson(unComentario)
  }

*/
 
  
  
}
