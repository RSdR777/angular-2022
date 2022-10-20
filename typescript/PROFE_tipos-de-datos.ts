// const edad = 10;
// let altura:number = 175;
//altura = 'hola';

const alto: boolean = true;

//interfaces
interface IPersona {
    dni:number,
    apellido: string,
    altura: number,
};

const persona:IPersona = {
    dni: 1234654654,
    apellido: 'lopez',
    altura: 175
};

//interface para metodos
interface IHablar {
    hablar(palabra: string): void;
};

class Persona implements IHablar{
    //atributos
    private dni: number;
    private apellido: string;
    private altura: number;

    //constructor
    constructor(dni:number,apellido:string,altura:number) {
        this.setApellido(apellido);
        //invoco a los otros setters!
    }

    hablar(palabra: string): void {
        console.log(palabra);
    }

    //getter/setter
    public getDni():number {
        return this.dni;
    }
    
    //no pongo setter porque asumo que el dni es inmutable
    public setApellido(apellido:string): void {
        this.apellido = apellido || '';
    }
}

//clase abstracta
abstract class Articulo {
    private titulo:string;
    public autor:string;
    public precio: number;

    constructor(titulo:string, autor:string,precio:number) {
        this.titulo = titulo;
        this.autor = autor;
        this.precio = precio;
    }

    //metodo abstracto!
    public abstract toString():void;
} 

//clase hija
class Libro extends Articulo {
    //propio atributos
    private isbn:string;

    constructor(
        titulo:string, 
        autor:string, 
        precio: number,
        isbn:string)
        {
            //nace el padre
            super(titulo,autor,precio);
            //el hijo puede setear sus atributos
            this.isbn = isbn;
        }

    //debo implementar el metodo que quedo abstracto en el padre
    public toString(): void {
        console.log(JSON.stringify(this));
    }
}

//node!
//crear una instancia de libro
const libro = new Libro('iron man','autor',1500,'13132132123312');
libro.toString();