import { Modelo } from "./Modelo";

export class DatosVehiculo{

    constructor(
        public id: number,
        public modelo: string,
        public particular : boolean,
        public alarma : boolean,
        public garaje : boolean,
        public hijos : boolean,
        public intervaloEdad : number,
        public interavaloKilometros : number,
        public tipoSeguro : number){}
}
