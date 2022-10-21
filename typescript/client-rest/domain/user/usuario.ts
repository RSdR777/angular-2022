
/*db:
tabla usuario
-------------
estructura

factura
*/

export interface Repository<U, T> {
    // métodos que necesito para acceder a una tabla
    // por ejemplo los métodos CRUD

    // Tipo de entidades U (tipo de datos de entrada)
    // y tipo a devolver T (tipo de datos de salida)

    create(entity: U):T;
    
    // no tiene por qué recibir nada, ni devolver nada
    //delete(id:number): void;
}
//----------------------------------------
export interface Usuario {
    id: number,
    nombre:string,
    sector:string
}

export interface UsuarioParams {
    codigo:number,
    name:string,
    sector: string
}