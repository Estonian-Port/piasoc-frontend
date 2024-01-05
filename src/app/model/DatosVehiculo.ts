
export class DatosVehiculoDTO{

    constructor(
        public id: number,
        public modelo: string,
        public particular : boolean,
        public alarma : boolean,
        public garaje : boolean,
        public hijos : boolean,
        public intervaloEdad : number,
        public intervaloKilometros : number,
        public tipoSeguro : number){}
}
