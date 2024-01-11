export class Cliente{

    constructor(
        public id: number, 
        public nombre: string,
        public apellido : string,
        public sexo : string,
        public cuil : number,
        public fechaNacimiento : Date,
        public empresa : string,
        public ciudad : string,
        public provincia : string,
        public codigoPostal : number,
        public email : string,
        public celular : number){}

}
