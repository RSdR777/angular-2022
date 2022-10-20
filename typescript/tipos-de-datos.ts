//const edad = 10;
//let altura:number = 175;
// altura = 'hola';  // es un lenguaje fuertemente tipado

//const alto:boolean = true;

// interfaces para objetos
// define atributos y tipos
interface IPersona {
    dni: number,
    apellido: string, 
    altura:number,
};

const persona:IPersona = {
    dni: 12345678,
    apellido: 'lopez',
    altura: 175
}

// interfaces para métodos
// se pueden parametrizar las funciones
interface IHablar {
    hablar(palabra: string): void;    
};

// se crea una clase para cumplir el contrato de la interfaz
class Perosna implements IHablar {
    // atributos
    dni: number;
    apellido: string;
    altura: number;

    // constructor
    // no se permiten otras definiciones del constructor
    constructor(dni:number, apellido:string, altura:number) {
        this.setApellido(apellido);
        this.setAltura(altura);
    }

    // getter & setters
    // interfaces públicas que permiten el acceso a propiedades privadas
    public getDni():number {
        return this.dni;        
    }

    public getApellido():string {
        return this.apellido;        
    }

    public getAltura():number {
        return this.altura;        
    }

    hablar(palabra: string) : void {
        console.log(palabra);
    }

    // no pongo setter porque asumo que el DNI es inmutable
    public setApellido(apellido:string): void {
        this.apellido = apellido || '';
    }

    public setAltura(altura:number): void {
        this.altura = altura;
    }
}

// clase abstracta
/*
abstract class Articulo {
    // al definir así los atributos, estos son accesibles desde fuera sin getters ni setters
    constructor(
        public titulo:string, 
        public autor:string, 
        public precio:number) {

    }
}
*/




