//--------------------
/*
interface Factura {
    id: number,
    monto:number
}
*/

export class Factura {
    constructor (private id: number, private monto:number) {
    }
}


export interface FacturaParams {
    codigo:number,
    name:string,
    fecha: Date
}